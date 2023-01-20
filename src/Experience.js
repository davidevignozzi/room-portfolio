import { Center, OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import React from 'react';
import Camera from './components/Camera';
import Lights from './components/Lights';

const Experience = () => {
    return (
        <>
            {/* Debug */}
            <Perf position="top-left" />

            {/* Camera */}
            <Camera />

            {/* Lights */}
            <Lights />

            {/* Objects */}
            <Center>
                <mesh>
                    <boxGeometry />
                    <meshStandardMaterial />
                </mesh>
            </Center>
        </>
    );
};

export default Experience;
