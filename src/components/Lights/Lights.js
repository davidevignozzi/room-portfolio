import { EffectComposer, Bloom } from '@react-three/postprocessing';
import LoupedeckLights from './LoupedeckLights';
import RodeCasterLights from './RodeCasterLights';

const Lights = (props) => {
    const nodes = props.nodes;
    return (
        <>
            <EffectComposer>
                <Bloom mipmapBlur />
            </EffectComposer>

            {/* Animated */}
            <LoupedeckLights nodes={nodes} />
            <RodeCasterLights nodes={nodes} />

            {/* Static Lights */}
            <group>
                {/* Monitor Lamp */}
                <mesh
                    geometry={nodes.LampLight.geometry}
                    position={nodes.LampLight.position}
                    rotation={nodes.LampLight.rotation}
                    scale={nodes.LampLight.scale}
                >
                    <meshStandardMaterial
                        color="white"
                        emissive="white"
                        emissiveIntensity={0.75}
                        toneMapped={false}
                    />
                </mesh>

                {/* Back Monitor */}
                <group>
                    <mesh
                        geometry={nodes.MonitorLights.geometry}
                        position={nodes.MonitorLights.position}
                        rotation={nodes.MonitorLights.rotation}
                        scale={nodes.MonitorLights.scale}
                    >
                        <meshStandardMaterial
                            color="white"
                            emissive="white"
                            emissiveIntensity={0.75}
                            toneMapped={false}
                        />
                    </mesh>
                </group>

                {/* BackTv */}
                <mesh
                    geometry={nodes.TVLights.geometry}
                    position={nodes.TVLights.position}
                    rotation={nodes.TVLights.rotation}
                    scale={nodes.TVLights.scale}
                >
                    <meshStandardMaterial
                        color="white"
                        emissive="white"
                        emissiveIntensity={2}
                        toneMapped={false}
                    />
                </mesh>
            </group>

            <ambientLight intensity={0.9} />
        </>
    );
};

export default Lights;
