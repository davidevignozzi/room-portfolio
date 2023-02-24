import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

/**
 * Loupedeck
 */
const LoupedeckLights = () => {
    const light1 = useRef();
    const { nodes } = useGLTF('./assets/lights/loupedeckLights.glb');
    console.log('🚀 ~ LoupedeckLights ~ nodes:', nodes);

    // Lights Animations
    useFrame((_, delta) => {
        light1.current.emissiveIntensity = Math.sin(1);
    });

    return (
        <group>
            {/* Lateral */}
            <mesh
                geometry={nodes.LoupedeckLateralLights.geometry}
                position={nodes.LoupedeckLateralLights.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="darkorange"
                    emissiveIntensity={1.25}
                    toneMapped={false}
                />
            </mesh>

            {/* 1 */}
            <mesh
                geometry={nodes.LoupedeckLights001.geometry}
                position={nodes.LoupedeckLights001.position}
            >
                <meshStandardMaterial
                    ref={light1}
                    color="grey"
                    emissive="orange"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights002.geometry}
                position={nodes.LoupedeckLights002.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="orange"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights003.geometry}
                position={nodes.LoupedeckLights003.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="orange"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights004.geometry}
                position={nodes.LoupedeckLights004.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="orange"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>

            {/* 2 */}
            <mesh
                geometry={nodes.LoupedeckLights005.geometry}
                position={nodes.LoupedeckLights005.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="orange"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights006.geometry}
                position={nodes.LoupedeckLights006.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="orange"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights007.geometry}
                position={nodes.LoupedeckLights007.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="orange"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights008.geometry}
                position={nodes.LoupedeckLights008.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="orange"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>

            {/* 3 */}
            <mesh
                geometry={nodes.LoupedeckLights009.geometry}
                position={nodes.LoupedeckLights009.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="orange"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights010.geometry}
                position={nodes.LoupedeckLights010.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="orange"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights011.geometry}
                position={nodes.LoupedeckLights011.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="orange"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                geometry={nodes.LoupedeckLights012.geometry}
                position={nodes.LoupedeckLights012.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="orange"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
        </group>
    );
};

export default LoupedeckLights;
