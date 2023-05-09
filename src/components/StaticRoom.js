import { useRef } from 'react';
import * as THREE from 'three';
import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Smoke from './Smoke';
import LaptopScene from './LaptopScene';
import MonitorScene from './MonitorScene';
import Lights from './Lights/Lights';
import TabletScene from './TabletScene';
import TrophiesScene from './TrophiesScene';
import PhoneScene from './PhoneScene';
import CorkBoardScene from './CorkBoardScene';

const StaticRoom = () => {
    /**
     * Nodes
     */
    const { nodes } = useGLTF('./assets/Room.glb');
    console.log('🚀 ~ StaticRoom ~ nodes:', nodes);

    /**
     * Materials
     */
    const bakedTexture = useTexture('./assets/Textures/baked.jpg');
    bakedTexture.flipY = false;
    bakedTexture.encoding = THREE.sRGBEncoding;

    const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });

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
        <group position={[-0.25, 0.5, 0.25]}>
            {/* Static Model */}
            <mesh
                geometry={nodes.Room.geometry}
                position={nodes.Room.position}
                rotation={nodes.Room.rotation}
                scale={nodes.Room.scale}
                material={bakedMaterial}
            />

            {/* Chair */}
            <mesh
                ref={chairRef}
                geometry={nodes.Office_chair.geometry}
                position={nodes.Office_chair.position}
                scale={nodes.Office_chair.scale}
                material={bakedMaterial}
            />

            {/* Plant */}
            <mesh
                ref={plantRef}
                geometry={nodes.Plant.geometry}
                position={nodes.Plant.position}
                rotation={nodes.Plant.rotation}
                scale={nodes.Plant.scale}
                material={bakedMaterial}
            />

            {/* Smoke */}
            <Smoke />

            {/* Lights Effects */}
            <Lights nodes={nodes} />

            {/* Laptop => Loading */}
            <LaptopScene nodes={nodes} material={bakedMaterial} />

            {/* Monitor => Projects */}
            <MonitorScene nodes={nodes} material={bakedMaterial} />

            {/* Tablet => Skills */}
            <TabletScene nodes={nodes} material={bakedMaterial} />

            {/* Phone => Contacts */}
            <PhoneScene nodes={nodes} material={bakedMaterial} />

            {/* Trophies => Education */}
            <TrophiesScene nodes={nodes} material={bakedMaterial} />

            {/* CorkBoard => Experiences */}
            <CorkBoardScene nodes={nodes} material={bakedMaterial} />
        </group>
    );
};

useGLTF.preload('./assets/Room.glb');

export default StaticRoom;
