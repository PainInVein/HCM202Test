import { KeyboardControls, PointerLockControls, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier';
import { Leva } from 'leva';
import { Suspense, useCallback, useEffect, useMemo, useRef, useState, type JSX } from 'react';
import { Mesh, Object3D } from 'three';
import { controlMap } from '../../../features/camera-controller/models/controls';
import { UserCamera } from '../../../features/camera-controller/ui/Camera';
import { SceneWrapper } from '../../../shared/ui/canvas/SceneWrapper';
import { MuseumEnvironment } from '../../../features/museum-environment/ui/MuseumEnvironment';
import { useMuseumSettings } from '../../../features/museum-environment/services/MuseumSettingsStore';

// we only need a single museum model now
const MUSEUM_MODEL_PATH = '/Models/Museum.glb';
// (old TABLE_POSITION/DETECTION_RADIUS were removed)
// helper for loading any GLB that will be rendered visually only
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

interface MuseumSceneContentProps {
  onEnterProximity: () => void;
  onExitProximity: () => void;
  onInteract: () => void;
  isModalOpen: boolean;
  isPaused: boolean;
}

function MuseumSceneContent({
  onEnterProximity,
  onExitProximity,
  onInteract,
  isModalOpen,
  isPaused,
}: MuseumSceneContentProps) {
  const controlsRef = useRef<any>(null);

  // Handle lock/unlock without remounting — prevents camera jitter
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

      {/* Sync FOV and mouse sensitivity at runtime */}
      <FovSync />
      <SensitivitySync controlsRef={controlsRef} />

      <Suspense fallback={null}>
        <Physics gravity={[0, -9.8, 0]}>

          {/* Môi trường & Ánh sáng */}
          <MuseumEnvironment enableControls={false} levaHidden={true} />

          {/* Player camera — always mounted, freezes when paused */}
          <UserCamera frozen={isPaused || isModalOpen} />


          {/* ═══ Sàn nhà ═══ */}
          <RigidBody type="fixed" position={[0, -0.05, 0]} colliders={false}>
            <CuboidCollider args={[50, 0.05, 50]} />
          </RigidBody>

          {/* museum model (visual only)
               make sure the glb is accessible via public/Models/Museum.glb */}
          <VisualModel scale={20} path={MUSEUM_MODEL_PATH} />

          {/* optional fixed collider if the glb doesn't include one
              -- uncomment the section below and adjust size/position */}
          {false && (
            <RigidBody type="fixed" colliders={false}>
              <CuboidCollider args={[10, 2, 10]} position={[0, 1, 0]} />
            </RigidBody>
          )}

        </Physics>
      </Suspense>
    </>
  );
}

export interface MuseumSceneProps {
  isPaused?: boolean;
  onPause?: () => void;
}

export const MuseumPage = ({ isPaused = false, onPause }: MuseumSceneProps) => {
  // drop experiment store hooks for now; museum doesn't need proximity logic until
  // you add interactable exhibits later
  const [showPrompt, setShowPrompt] = useState(false);

  const handleEnterProximity = () => setShowPrompt(true);
  const handleExitProximity = () => setShowPrompt(false);

  // ESC → pause (only when playing)
  // const handleKeyDown = useCallback((e: KeyboardEvent) => {
  //   if (e.key === 'Escape' && onPause && !isModalOpen) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     document.exitPointerLock();
  //     onPause();
  //   }
  // }, [onPause, isModalOpen]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && onPause) {
      e.preventDefault();
      e.stopPropagation();
      document.exitPointerLock();
      onPause();
    }
  }, [onPause]);

  useEffect(() => {
    if (!isPaused) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isPaused, handleKeyDown]);

  // useEffect(() => {
  //   if (isModalOpen || isPaused) {
  //     document.exitPointerLock();
  //     document.body.style.cursor = 'auto';
  //   }
  // }, [isModalOpen, isPaused]);

    useEffect(() => {
    if (isPaused) {
      document.exitPointerLock();
      document.body.style.cursor = 'auto';
    }
  }, [isPaused]);

  return (
    <>
      <Leva hidden />

      <KeyboardControls map={controlMap}>
        <SceneWrapper hideOverlay={true}>
          <MuseumSceneContent
            onEnterProximity={handleEnterProximity}
            onExitProximity={handleExitProximity}
            onInteract={() => { /* future museum interactions */ }}
            isModalOpen={false}
            isPaused={isPaused}
          />
        </SceneWrapper>
      </KeyboardControls>
    </>
  );
};