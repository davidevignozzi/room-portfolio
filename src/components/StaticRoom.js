import { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Smoke from './elements/animated/Smoke';
import LaptopScene from './LaptopScene';
import MonitorScene from './MonitorScene';
import Lights from './elements/animated/Lights/Lights';
import TabletScene from './TabletScene';
import TrophiesScene from './TrophiesScene';
import PhoneScene from './PhoneScene';
import CorkBoardScene from './CorkBoardScene';

const StaticRoom = () => {
    /**
     * Nodes
     */
    const { nodes } = useGLTF('./assets/RoomDefinitive.glb');
    console.log('🚀 ~ StaticRoom ~ nodes:', nodes);

    /**
     * Materials
     */
    const bakedTexture = useTexture('./assets/Textures/bakedSun.jpg');
    bakedTexture.flipY = false;

    /**
     * Ref
     */
    const chairRef = useRef();
    const plantRef = useRef();

    /**
     * Animation
     */
    useFrame(({ clock }) => {
        const elapsedTime = clock.elapsedTime;

        // Chair Animation
        chairRef.current.rotation.y -= Math.cos(elapsedTime) * 0.0025;

        // Plant rotation
        plantRef.current.rotation.y += 0.01;
    });
    return (
        <group>
            <mesh
                geometry={nodes.Room.geometry}
                position={nodes.Room.position}
                rotation={nodes.Room.rotation}
            >
                {/* <meshBasicMaterial map={bakedTexture} /> */}
                <meshStandardMaterial color={'red'} />
            </mesh>

            {/* Chair */}
            <mesh
                ref={chairRef}
                geometry={nodes.Office_chair.geometry}
                position={nodes.Office_chair.position}
            >
                {/* <meshBasicMaterial map={bakedTexture} /> */}
                <meshStandardMaterial color={'red'} />
            </mesh>

            {/* Plant */}
            <mesh ref={plantRef} geometry={nodes.Plant.geometry} position={nodes.Plant.position}>
                {/* <meshBasicMaterial map={bakedTexture} /> */}
                <meshStandardMaterial color={'red'} />
            </mesh>

            {/* Smoke */}
            <Smoke />

            {/* Lights Effects */}
            <Lights />

            {/* Laptop => Loading */}
            <LaptopScene nodes={nodes} material={bakedTexture} />

            {/* Monitor => Projects */}
            <MonitorScene nodes={nodes} material={bakedTexture} />

            {/* Tablet => Skills */}
            <TabletScene nodes={nodes} material={bakedTexture} />

            {/* Phone => Contacts */}
            <PhoneScene nodes={nodes} material={bakedTexture} />

            {/* Trophies => Education */}
            <TrophiesScene nodes={nodes} material={bakedTexture} />

            {/* CorkBoard => Experiences */}
            <CorkBoardScene nodes={nodes} material={bakedTexture} />
        </group>
    );
};

useGLTF.preload('./assets/Room.glb');

export default StaticRoom;
