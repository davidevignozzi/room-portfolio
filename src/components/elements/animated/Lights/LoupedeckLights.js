import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useState, useEffect } from 'react';

/**
 * Loupedeck
 */
const LoupedeckLights = () => {
    // model
    const { nodes } = useGLTF('./assets/lights/loupedeckLights.glb');

    const light1 = useRef();
    const light2 = useRef();
    const light3 = useRef();
    const light4 = useRef();
    const light5 = useRef();
    const light6 = useRef();
    const light7 = useRef();
    const light8 = useRef();
    const light9 = useRef();
    const light10 = useRef();
    const light11 = useRef();
    const light12 = useRef();

    const lights = [
        light1,
        light2,
        light3,
        light4,
        light5,
        light6,
        light7,
        light8,
        light9,
        light10,
        light11,
        light12
    ];

    /**
     * Light Animation
     */
    useFrame(({ clock }) => {
        lights.forEach((light) => {
            light.current.material.emissiveIntensity = Math.sin(clock.getElapsedTime()) + 1;
        });
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
                    emissive="white"
                    emissiveIntensity={1}
                    toneMapped={false}
                />
            </mesh>

            {/* 1 */}
            <mesh
                ref={light1}
                geometry={nodes.LoupedeckLights001.geometry}
                position={nodes.LoupedeckLights001.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="orange"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                ref={light2}
                geometry={nodes.LoupedeckLights002.geometry}
                position={nodes.LoupedeckLights002.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="white"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                ref={light3}
                geometry={nodes.LoupedeckLights003.geometry}
                position={nodes.LoupedeckLights003.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="khaki"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                ref={light4}
                geometry={nodes.LoupedeckLights004.geometry}
                position={nodes.LoupedeckLights004.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="violet"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>

            {/* 2 */}
            <mesh
                ref={light5}
                geometry={nodes.LoupedeckLights005.geometry}
                position={nodes.LoupedeckLights005.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="pink"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                ref={light6}
                geometry={nodes.LoupedeckLights006.geometry}
                position={nodes.LoupedeckLights006.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="violet"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                ref={light7}
                geometry={nodes.LoupedeckLights007.geometry}
                position={nodes.LoupedeckLights007.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="cyan"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                ref={light8}
                geometry={nodes.LoupedeckLights008.geometry}
                position={nodes.LoupedeckLights008.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="lightgreen"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>

            {/* 3 */}
            <mesh
                ref={light9}
                geometry={nodes.LoupedeckLights009.geometry}
                position={nodes.LoupedeckLights009.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="lightgreen"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                ref={light10}
                geometry={nodes.LoupedeckLights010.geometry}
                position={nodes.LoupedeckLights010.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="#5ebdd8"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
            <mesh
                ref={light11}
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
                ref={light12}
                geometry={nodes.LoupedeckLights012.geometry}
                position={nodes.LoupedeckLights012.position}
            >
                <meshStandardMaterial
                    color="grey"
                    emissive="yellow"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>
        </group>
    );
};

export default LoupedeckLights;
