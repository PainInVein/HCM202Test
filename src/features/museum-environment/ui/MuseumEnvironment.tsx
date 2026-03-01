import { ContactShadows, Environment, Lightformer, OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing';

interface MuseumEnvironmentProps {
  enableControls?: boolean;
}

export const MuseumEnvironment = ({ enableControls = true }: MuseumEnvironmentProps) => {
  // Hardcoded museum environment settings
  const config = {
    bgColor: '#f0f2f5',
    ambientIntensity: 0.12,
    envPreset: 'apartment' as const,
    envBlur: 1,
    lightIntensity: 2,
    shadowOpacity: 0,
    shadowBlur: 0,
    shadowColor: '#8a8a8a',
    enableEffects: true,
    bloomIntensity: 0.05,
    bloomThreshold: 1,
  };

  return (
    <>

      {/* 2. Ánh sáng môi trường */}
      <ambientLight intensity={config.ambientIntensity} />

      {/* 3. Setup đèn trần giả lập đèn Huỳnh Quang (Fluorescent) */}
      <Environment preset={config.envPreset} blur={config.envBlur}>
        {/* Một tấm sáng lớn trên trần để bao phủ ánh sáng tổng thể */}
        <Lightformer
          intensity={1}
          position={[0, 10, 0]}
          scale={[10, 10, 1]}
          rotation-x={Math.PI / 2}
          color="white"
        />
      </Environment>

      {/* 4. Bóng đổ mềm mại trên sàn trắng */}
      <ContactShadows
        position={[0, -0.01, 0]}
        opacity={config.shadowOpacity}
        scale={20}
        blur={config.shadowBlur}
        far={1.5}
        color={config.shadowColor}
        resolution={512}
        smooth={true}
      />

      {/* 5. Hậu kỳ tối giản */}
      {config.enableEffects && (
        <EffectComposer enableNormalPass>
          <Bloom
            luminanceThreshold={config.bloomThreshold}
            mipmapBlur
            intensity={config.bloomIntensity}
            radius={0.5}
          />

          <Vignette offset={0.1} darkness={0.6} blendFunction={6} />
        </EffectComposer>
      )}

      {enableControls && (
        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.1}
          makeDefault
        />
      )}
    </>
  );
};