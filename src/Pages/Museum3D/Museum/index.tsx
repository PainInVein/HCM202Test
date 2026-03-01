import { KeyboardControls, PointerLockControls, Sky, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier';
import { Suspense, useCallback, useEffect, useMemo, useRef, useState, type JSX } from 'react';
import { Mesh, Object3D } from 'three';
import { controlMap } from '../../../features/camera-controller/models/controls';
import type { UserCameraHandle } from '../../../features/camera-controller/ui/Camera';
import { UserCamera } from '../../../features/camera-controller/ui/Camera';
import { useMuseumSettings } from '../../../features/museum-environment/services/MuseumSettingsStore';
import { MuseumEnvironment } from '../../../features/museum-environment/ui/MuseumEnvironment';
import { InteractionHUD } from '../../../features/Museum-interactive/components/InteractionHUD';
import { MuseumInfoPanel } from '../../../features/Museum-interactive/components/MuseumInfoPanel';
import { PaintingExhibition } from '../../../features/Museum-interactive/components/PaintingExhibition';
import { PaintingModal } from '../../../features/Museum-interactive/components/PaintingModal';
import { EXHIBITION_PAINTINGS, WALL_CENTER, type PaintingData } from '../../../features/Museum-interactive/data/exhibitionData';
import { SceneWrapper } from '../../../shared/ui/canvas/SceneWrapper';
const MUSEUM_MODEL_PATH = '/Models/Museum.glb';

// ─── Visual model loader ────────────────────────────────────────────────
function VisualModel({ path, ...props }: { path: string } & JSX.IntrinsicElements['group']) {
  const { scene } = useGLTF(path);
  const clone = useMemo(() => {
    const c = scene.clone();
    c.traverse((child: Object3D) => {
      if ((child as Mesh).isMesh) {
        (child as Mesh).castShadow = true;
        (child as Mesh).receiveShadow = true;
      }
    });
    return c;
  }, [scene]);
  return <primitive object={clone} {...props} />;
}

// ─── Sync FOV at runtime ────────────────────────────────────────────────
function FovSync() {
  const { camera } = useThree();
  const fov = useMuseumSettings((s) => s.fov);

  useEffect(() => {
    if ('fov' in camera && (camera as any).fov !== fov) {
      (camera as any).fov = fov;
      (camera as any).updateProjectionMatrix();
    }
  }, [camera, fov]);

  return null;
}

// ─── Sync mouse sensitivity ─────────────────────────────────────────────
function SensitivitySync({ controlsRef }: { controlsRef: React.RefObject<any> }) {
  const sensitivity = useMuseumSettings((s) => s.mouseSensitivity);

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.pointerSpeed = sensitivity;
    }
  });

  return null;
}

// ─── Ground plane ────────────────────────────────────────────────────────
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial color="#4a6741" roughness={0.9} />
    </mesh>
  );
}

// ─── Sky dome ────────────────────────────────────────────────────────────
function SkyDome() {
  return (
    <Sky
      distance={450000}
      sunPosition={[100, 50, 100]}
      inclination={0.5}
      azimuth={0.25}
      turbidity={8}
      rayleigh={2}
    />
  );
}

// ─── Scene content ───────────────────────────────────────────────────────
interface MuseumSceneContentProps {
  onOpenPainting: (painting: PaintingData) => void;
  onActivePaintingChange: (id: string | null) => void;
  isModalOpen: boolean;
  isPaused: boolean;
  cameraRef: React.RefObject<UserCameraHandle | null>;
  onPlayerPositionUpdate: (x: number, y: number, z: number) => void;
}

function MuseumSceneContent({
  onOpenPainting,
  onActivePaintingChange,
  isModalOpen,
  isPaused,
  cameraRef,
  onPlayerPositionUpdate,
}: MuseumSceneContentProps) {
  const controlsRef = useRef<any>(null);

  // Handle lock/unlock without remounting
  useEffect(() => {
    if (!controlsRef.current) return;

    if (isPaused || isModalOpen) {
      controlsRef.current.unlock();
    } else {
      const timer = setTimeout(() => {
        controlsRef.current?.lock();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isPaused, isModalOpen]);

  return (
    <>
      <PointerLockControls ref={controlsRef} selector="#r3f-canvas" />

      {/* Sync FOV and mouse sensitivity */}
      <FovSync />
      <SensitivitySync controlsRef={controlsRef} />

      {/* Sky & Ground */}
      <SkyDome />
      <Ground />

      <Suspense fallback={null}>
        <Physics gravity={[0, -9.8, 0]}>

          {/* Lighting & Environment */}
          <MuseumEnvironment enableControls={false} />

          {/* Player camera — starts in FRONT of the museum (z = 33) */}
          <UserCamera ref={cameraRef} frozen={isPaused || isModalOpen} onPositionUpdate={onPlayerPositionUpdate} />

          {/* Floor collider */}
          <RigidBody type="fixed" position={[0, -0.05, 0]} colliders={false}>
            <CuboidCollider args={[100, 0.05, 100]} />
          </RigidBody>

          {/* Museum 3D model (visual only) */}
          <VisualModel scale={25} path={MUSEUM_MODEL_PATH} />

          {/* ═══ Painting Exhibition on circular wall ═══ */}
          <PaintingExhibition
            onOpenPainting={onOpenPainting}
            onActivePaintingChange={onActivePaintingChange}
          />

        </Physics>
      </Suspense>
    </>
  );
}

// ─── Main Museum Page ────────────────────────────────────────────────────
export interface MuseumSceneProps {
  isPaused?: boolean;
  onPause?: () => void;
}

export const MuseumPage = ({ isPaused = false, onPause }: MuseumSceneProps) => {
  const [modalPainting, setModalPainting] = useState<PaintingData | null>(null);
  const [activePaintingId, setActivePaintingId] = useState<string | null>(null);
  const [nearMuseum, setNearMuseum] = useState(false);
  const isModalOpen = modalPainting !== null;
  const cameraRef = useRef<UserCameraHandle>(null);
  const hasEnteredMuseum = useRef(false);

  // Museum entrance detection — museum is at origin, detect when player is within range
  const MUSEUM_ENTRANCE_DISTANCE = 28;
  const INSIDE_DISTANCE = 8;

  const handlePlayerPositionUpdate = useCallback((x: number, _y: number, z: number) => {
    if (hasEnteredMuseum.current) return; // Already entered, never show again
    const dist = Math.sqrt(x * x + z * z);
    setNearMuseum(dist < MUSEUM_ENTRANCE_DISTANCE && dist > INSIDE_DISTANCE);
  }, []);

  const handleOpenPainting = useCallback((painting: PaintingData) => {
    setModalPainting(painting);
  }, []);

  const handleClosePainting = useCallback(() => {
    setModalPainting(null);
  }, []);

  // ESC → pause; F → teleport into museum when near
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && onPause && !isModalOpen) {
      e.preventDefault();
      e.stopPropagation();
      document.exitPointerLock();
      onPause();
    }
    // F key → teleport into museum center
    if ((e.key === 'f' || e.key === 'F') && nearMuseum && !isModalOpen) {
      const [cx, , cz] = WALL_CENTER;
      cameraRef.current?.teleportTo(cx, 3, cz);
      hasEnteredMuseum.current = true;
      setNearMuseum(false);
    }
  }, [onPause, isModalOpen, nearMuseum]);

  useEffect(() => {
    if (!isPaused) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isPaused, handleKeyDown]);

  useEffect(() => {
    if (isPaused) {
      document.exitPointerLock();
      document.body.style.cursor = 'auto';
    }
  }, [isPaused]);



  return (
    <>

      <KeyboardControls map={controlMap}>
        <SceneWrapper hideOverlay={true}>
          <MuseumSceneContent
            onOpenPainting={handleOpenPainting}
            onActivePaintingChange={setActivePaintingId}
            isModalOpen={isModalOpen}
            isPaused={isPaused}
            cameraRef={cameraRef}
            onPlayerPositionUpdate={handlePlayerPositionUpdate}
          />
        </SceneWrapper>
      </KeyboardControls>

      {/* Painting detail modal (HTML overlay) */}
      <PaintingModal painting={modalPainting} onClose={handleClosePainting} />

      {/* "Press F" HUD when near a painting */}
      <InteractionHUD
        visible={!!activePaintingId && !isModalOpen && !nearMuseum}
        paintingTitle={activePaintingId ? EXHIBITION_PAINTINGS.find(p => p.id === activePaintingId)?.title : undefined}
      />

      {/* Museum entrance info panel */}
      <MuseumInfoPanel visible={nearMuseum && !isModalOpen && !isPaused} />
    </>
  );
};