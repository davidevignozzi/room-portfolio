import { useGLTF } from '@react-three/drei';
const StaticLights = () => {
    const { nodes, materials } = useGLTF('./assets/lights/staticLights.glb');
    return (
        <group>
            {/* Lamp */}
            <mesh
                geometry={nodes.LampLight.geometry}
                position={nodes.LampLight.position}
                rotation={nodes.LampLight.rotation}
                scale={nodes.LampLight.scale}
            >
                <meshStandardMaterial
                    color={materials.LampLight.color}
                    emissive={materials.LampLight.emissive}
                    emissiveIntensity={0.75}
                    toneMapped={false}
                />
            </mesh>

            {/* Back Monitor */}
            <group>
                <mesh
                    geometry={nodes.MonitorLights.children[0].geometry}
                    position={nodes.MonitorLights.position}
                    rotation={nodes.MonitorLights.rotation}
                    scale={nodes.MonitorLights.scale}
                >
                    <meshStandardMaterial
                        color={materials.MonitorLightRight.color}
                        emissive={materials.MonitorLightRight.emissive}
                        emissiveIntensity={0.75}
                        toneMapped={false}
                    />
                </mesh>

                <mesh
                    geometry={nodes.MonitorLights.children[1].geometry}
                    position={nodes.MonitorLights.position}
                    rotation={nodes.MonitorLights.rotation}
                    scale={nodes.MonitorLights.scale}
                >
                    <meshStandardMaterial
                        color={materials.MonitorLightLeft.color}
                        emissive={materials.MonitorLightLeft.emissive}
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
                    color={materials.TVBackLight.color}
                    emissive={materials.TVBackLight.emissive}
                    emissiveIntensity={2}
                    toneMapped={false}
                />
            </mesh>

            {/* Ps5 */}
            <mesh
                geometry={nodes.Ps5Lights.geometry}
                position={nodes.Ps5Lights.position}
                rotation={nodes.Ps5Lights.rotation}
                scale={nodes.Ps5Lights.scale}
            >
                <meshStandardMaterial
                    color={materials.Ps5Lights.color}
                    emissive={materials.Ps5Lights.emissive}
                    emissiveIntensity={2.5}
                    toneMapped={false}
                />
            </mesh>
        </group>
    );
};

export default StaticLights;
