import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Vector3 } from 'three';

import { EXHIBITION_PAINTINGS, INTERACTION_DISTANCE, type PaintingData, WALL_CENTER, WALL_RADIUS } from '../data/exhibitionData';
import { WallPainting } from './WallPainting';

// Throttle proximity checks
const PROXIMITY_CHECK_INTERVAL = 6;

interface PaintingExhibitionProps {
    onOpenPainting: (painting: PaintingData) => void;
    onActivePaintingChange?: (paintingId: string | null) => void;
}

/**
 * Manages all paintings on the circular wall inside the museum.
 * Renders each WallPainting in 3D space and handles F-key interaction.
 * This component goes INSIDE the R3F <Canvas>.
 */
export const PaintingExhibition = ({ onOpenPainting, onActivePaintingChange }: PaintingExhibitionProps) => {
    const [activePaintingId, setActivePaintingId] = useState<string | null>(null);
    const activePaintingIdRef = useRef<string | null>(null);

    // Keep ref in sync and notify parent
    useEffect(() => {
        activePaintingIdRef.current = activePaintingId;
        onActivePaintingChange?.(activePaintingId);
    }, [activePaintingId, onActivePaintingChange]);

    const { camera } = useThree();
    const frameCountRef = useRef(0);
    const cameraPosRef = useRef(new Vector3());

    // Precalculate painting positions
    const paintingPositions = useMemo(() => {
        return EXHIBITION_PAINTINGS.map(painting => {
            const angle = painting.angle;
            const radius = WALL_RADIUS;
            const x = WALL_CENTER[0] + Math.sin(angle) * radius;
            const z = WALL_CENTER[2] + Math.cos(angle) * radius;
            const y = painting.heightOffset ?? 1.8;
            return {
                id: painting.id,
                position: new Vector3(x, y, z)
            };
        });
    }, []);

    useFrame(() => {
        frameCountRef.current++;
        if (frameCountRef.current % PROXIMITY_CHECK_INTERVAL !== 0) return;

        cameraPosRef.current.copy(camera.position);

        // Find the absolute closest painting
        let closestId: string | null = null;
        let minDistanceSq = INTERACTION_DISTANCE * INTERACTION_DISTANCE; // Use squared distance for perf

        for (const pt of paintingPositions) {
            const distSq = cameraPosRef.current.distanceToSquared(pt.position);
            if (distSq < minDistanceSq) {
                minDistanceSq = distSq;
                closestId = pt.id;
            }
        }

        if (closestId !== activePaintingIdRef.current) {
            setActivePaintingId(closestId);
        }
    });

    // F-key interaction listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.key === 'f' || e.key === 'F') && activePaintingIdRef.current) {
                e.preventDefault();
                e.stopPropagation();
                const painting = EXHIBITION_PAINTINGS.find(
                    (p) => p.id === activePaintingIdRef.current
                );
                if (painting) {
                    document.exitPointerLock();
                    onOpenPainting(painting);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onOpenPainting]);

    return (
        <>
            {EXHIBITION_PAINTINGS.map((painting) => (
                <WallPainting
                    key={painting.id}
                    painting={painting}
                />
            ))}
        </>
    );
};
