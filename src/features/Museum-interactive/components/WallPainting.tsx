import { useTexture } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import { DoubleSide, Mesh } from 'three';
import type { PaintingData } from '../data/exhibitionData';
import {
    PAINTING_HEIGHT,
    PAINTING_WIDTH,
    WALL_CENTER,
    WALL_RADIUS,
} from '../data/exhibitionData';

interface WallPaintingProps {
    painting: PaintingData;
}

export const WallPainting = ({
    painting,
}: WallPaintingProps) => {
    const meshRef = useRef<Mesh>(null);

    const texture = useTexture(painting.imagePath);

    // Calculate painting dimensions keeping image aspect ratio
    const { width, height } = useMemo(() => {
        const img = (texture as any).image as HTMLImageElement | undefined;
        if (!img) return { width: PAINTING_WIDTH, height: PAINTING_HEIGHT };
        const imgAspect = img.width / img.height;
        const scale = painting.scale ?? 1.0;
        const w = PAINTING_WIDTH * scale;
        const h = w / imgAspect;
        return { width: w, height: h };
    }, [texture, painting.scale]);

    // Position the painting on the wall surface, facing INWARD (toward center)
    const { position, rotationY } = useMemo(() => {
        const angle = painting.angle;
        const radius = WALL_RADIUS;

        const x = WALL_CENTER[0] + Math.sin(angle) * radius;
        const z = WALL_CENTER[2] + Math.cos(angle) * radius;
        const y = painting.heightOffset ?? 1.8;

        // Rotate plane to face inward (toward center)
        const rotY = angle + Math.PI;

        return {
            position: [x, y, z] as [number, number, number],
            rotationY: rotY,
        };
    }, [painting.angle, painting.heightOffset]);



    return (
        <group position={position} rotation={[0, rotationY, 0]}>
            {/* Outer frame — dark wood */}
            <mesh position={[0, 0, -0.03]}>
                <planeGeometry args={[width + 0.3, height + 0.3]} />
                <meshStandardMaterial color="#2a1810" roughness={0.8} side={DoubleSide} />
            </mesh>

            {/* Inner frame — gold trim */}
            <mesh position={[0, 0, -0.02]}>
                <planeGeometry args={[width + 0.15, height + 0.15]} />
                <meshStandardMaterial color="#8B6914" roughness={0.4} metalness={0.3} side={DoubleSide} />
            </mesh>

            {/* The painting texture */}
            <mesh ref={meshRef} position={[0, 0, 0]}>
                <planeGeometry args={[width, height]} />
                <meshStandardMaterial
                    map={texture}
                    side={DoubleSide}
                    roughness={0.5}
                    metalness={0.0}
                />
            </mesh>

        </group>
    );
};
