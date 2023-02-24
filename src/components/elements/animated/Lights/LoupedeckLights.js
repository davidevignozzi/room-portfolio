import { useGLTF } from '@react-three/drei';

/**
 * Loupedeck
 */
const LoupedeckLights = () => {
    const { nodes } = useGLTF('./assets/lights/loupedeckLights.glb');
    console.log('🚀 ~ LoupedeckLights ~ nodes:', nodes);

    return (
        <group>
            {/* Lateral */}
            <mesh
                geometry={nodes.LoupedeckLateralLights.geometry}
                position={nodes.LoupedeckLateralLights.position}
            >
                <meshStandardMaterial
                    color="orange"
                    emissive="white"
                    emissiveIntensity={0.25}
                    toneMapped={false}
                />
            </mesh>

            {/* 1 */}
            <mesh
                geometry={nodes.LoupedeckLights001.geometry}
                position={nodes.LoupedeckLights001.position}
            >
                <meshStandardMaterial
                    color="orange"
                    emissive="white"
                    emissiveIntensity={0.25}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights002.geometry}
                position={nodes.LoupedeckLights002.position}
            >
                <meshStandardMaterial
                    color="orange"
                    emissive="white"
                    emissiveIntensity={0.25}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights003.geometry}
                position={nodes.LoupedeckLights003.position}
            >
                <meshStandardMaterial
                    color="orange"
                    emissive="white"
                    emissiveIntensity={0.25}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights004.geometry}
                position={nodes.LoupedeckLights004.position}
            >
                <meshStandardMaterial
                    color="orange"
                    emissive="white"
                    emissiveIntensity={0.25}
                    toneMapped={false}
                />
            </mesh>

            {/* 2 */}
            <mesh
                geometry={nodes.LoupedeckLights005.geometry}
                position={nodes.LoupedeckLights005.position}
            >
                <meshStandardMaterial
                    color="orange"
                    emissive="white"
                    emissiveIntensity={0.25}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights006.geometry}
                position={nodes.LoupedeckLights006.position}
            >
                <meshStandardMaterial
                    color="orange"
                    emissive="white"
                    emissiveIntensity={0.25}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights007.geometry}
                position={nodes.LoupedeckLights007.position}
            >
                <meshStandardMaterial
                    color="orange"
                    emissive="white"
                    emissiveIntensity={0.25}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights008.geometry}
                position={nodes.LoupedeckLights008.position}
            >
                <meshStandardMaterial
                    color="orange"
                    emissive="white"
                    emissiveIntensity={0.25}
                    toneMapped={false}
                />
            </mesh>

            {/* 3 */}
            <mesh
                geometry={nodes.LoupedeckLights009.geometry}
                position={nodes.LoupedeckLights009.position}
            >
                <meshStandardMaterial
                    color="orange"
                    emissive="white"
                    emissiveIntensity={0.25}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights010.geometry}
                position={nodes.LoupedeckLights010.position}
            >
                <meshStandardMaterial
                    color="orange"
                    emissive="white"
                    emissiveIntensity={0.25}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights011.geometry}
                position={nodes.LoupedeckLights011.position}
            >
                <meshStandardMaterial
                    color="orange"
                    emissive="white"
                    emissiveIntensity={0.25}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights012.geometry}
                position={nodes.LoupedeckLights012.position}
            >
                <meshStandardMaterial
                    color="orange"
                    emissive="white"
                    emissiveIntensity={0.25}
                    toneMapped={false}
                />
            </mesh>
        </group>
    );
};

export default LoupedeckLights;
