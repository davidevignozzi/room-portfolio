import { useState, useEffect } from 'react';
import useInteractions from '../utils/stores/useInteractions';
import { OrbitControls } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Camera = () => {
    const { camera, gl } = useThree();

    const loading = {
        cameraX: 0,
        cameraY: 1,
        cameraZ: 0.05,
        targetX: 0.45,
        targetY: 0.55,
        targetZ: 1,
        cameraZoom: 5.35
    };

    camera.position.x = loading.cameraX;
    camera.position.y = loading.cameraY;
    camera.position.z = loading.cameraZ;
    const target = { x: loading.targetX, y: loading.targetY, z: loading.targetZ };
    camera.zoom = loading.cameraZoom;

    /**
     * Phases
     **/
    const start = useInteractions((state) => state.start);
    console.log(useInteractions((state) => state.phase));

    setTimeout(() => {
        console.log('🚀');
        start();
        console.log(camera.zoom);
    }, 5000);

    useFrame((state, delta) => {});

    return (
        <OrbitControls
            camera={camera}
            gl={gl}
            target={[target.x, target.y, target.z]}
            // enablePan={false}
            rotateSpeed={0.2}
            zoomSpeed={2}
            // minPolarAngle={0}
            // maxPolarAngle={Math.PI / 2}
            // minAzimuthAngle={Math.PI / 2}
            // maxAzimuthAngle={Math.PI}
        />
    );
};

export default Camera;
