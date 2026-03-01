// features/camera-controller/ui/PlayerController.tsx
import { useKeyboardControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { CapsuleCollider, RapierRigidBody, RigidBody } from '@react-three/rapier';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Vector3 } from 'three';
import { useMuseumSettings } from '../../museum-environment/services/MuseumSettingsStore';
import type { ControlsState } from '../models/controls';

const VELOCITY_DEAD_ZONE = 0.001;

export interface UserCameraHandle {
  teleportTo: (x: number, y: number, z: number) => void;
}

interface UserCameraProps {
  frozen?: boolean;
  startPosition?: [number, number, number];
  onPositionUpdate?: (x: number, y: number, z: number) => void;
}

export const UserCamera = forwardRef<UserCameraHandle, UserCameraProps>(({ frozen = false, startPosition = [0, 3, 33], onPositionUpdate }, ref) => {
  const { camera } = useThree();
  const [, get] = useKeyboardControls<ControlsState>();
  const rigidBodyRef = useRef<RapierRigidBody>(null);

  // Expose teleport method
  useImperativeHandle(ref, () => ({
    teleportTo: (x: number, y: number, z: number) => {
      const rb = rigidBodyRef.current;
      if (!rb) return;
      rb.setTranslation({ x, y, z }, true);
      rb.setLinvel({ x: 0, y: 0, z: 0 }, true);
      camera.position.set(x, y + 0.3, z);
    },
  }));

  // Vectors — created once to avoid GC pressure
  const moveDir = useRef(new Vector3());
  const frontV = useRef(new Vector3());
  const sideV = useRef(new Vector3());
  const worldDir = useRef(new Vector3());
  const hasInitialized = useRef(false);

  useFrame(() => {
    const rb = rigidBodyRef.current;
    if (!rb) return;

    // Set initial look direction on first frame — look straight at the museum
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      const pos = rb.translation();
      camera.position.set(pos.x, pos.y + 0.3, pos.z);
      // Look horizontally toward the museum (toward -Z direction)
      camera.lookAt(pos.x, pos.y + 0.3, pos.z - 10);
    }

    // Read configurable settings
    const { movementSpeed, sprintMultiplier } = useMuseumSettings.getState();

    // Always keep camera synced to physics body position
    const pos = rb.translation();
    camera.position.set(pos.x, pos.y + 0.3, pos.z);

    // Report position for proximity detection
    if (onPositionUpdate) {
      onPositionUpdate(pos.x, pos.y, pos.z);
    }

    if (frozen) {
      // Kill horizontal velocity while paused
      const v = rb.linvel();
      rb.setLinvel({ x: 0, y: v.y, z: 0 }, true);
      return;
    }

    const { forward, backward, left, right, sprint } = get();
    const vel = rb.linvel();

    // Check if any movement key is pressed
    const isMoving = forward || backward || left || right;

    if (!isMoving) {
      // No input → stop horizontal movement immediately (prevents drift)
      rb.setLinvel({ x: 0, y: vel.y, z: 0 }, true);
    } else {
      // Calculate movement direction
      const speed = sprint ? movementSpeed * sprintMultiplier : movementSpeed;
      const front = frontV.current;
      const side = sideV.current;
      const dir = moveDir.current;

      // Get camera's forward direction projected onto the XZ plane
      // This avoids the Euler pitch leaking into horizontal movement (prevents drift)
      camera.getWorldDirection(worldDir.current);
      worldDir.current.y = 0;
      worldDir.current.normalize();

      // Calculate the Y-axis rotation angle from the projected forward direction
      const yAngle = Math.atan2(-worldDir.current.x, -worldDir.current.z);

      // Front/back: negative Z = forward in Three.js
      front.set(0, 0, (backward ? 1 : 0) - (forward ? 1 : 0));
      // Left/right: positive X = right
      side.set((right ? 1 : 0) - (left ? 1 : 0), 0, 0);

      dir.copy(front).add(side);

      // Normalize to prevent faster diagonal movement, then apply speed
      if (dir.lengthSq() > VELOCITY_DEAD_ZONE) {
        dir.normalize().multiplyScalar(speed);
        // Rotate direction only around Y axis (horizontal plane)
        // Correct Y-axis rotation matrix: x' = x*cos + z*sin, z' = -x*sin + z*cos
        const sinY = Math.sin(yAngle);
        const cosY = Math.cos(yAngle);
        const nx = dir.x * cosY + dir.z * sinY;
        const nz = -dir.x * sinY + dir.z * cosY;
        dir.x = nx;
        dir.z = nz;
        dir.y = 0;

        rb.setLinvel({ x: dir.x, y: vel.y, z: dir.z }, true);
      } else {
        rb.setLinvel({ x: 0, y: vel.y, z: 0 }, true);
      }
    }

    // Jump disabled
  });

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders={false}
      mass={1}
      type="dynamic"
      position={startPosition}
      enabledRotations={[false, false, false]}
      linearDamping={0.5}
      friction={1}
    >
      <CapsuleCollider args={[0.75, 0.35]} />
    </RigidBody>
  );
});