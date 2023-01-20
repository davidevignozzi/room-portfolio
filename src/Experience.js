import { Center, Environment, OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import React from 'react';
import Camera from './components/Camera';
import Lights from './components/Lights';
import Room from './components/Room';

const Experience = () => {
    return (
        <>
            {/* Debug */}
            <Perf position="top-left" />

            {/* Camera */}
            <Camera />

            {/* Environment */}
            <Environment preset="city" />

            {/* Lights */}
            <Lights />

            {/* Objects */}
            <Center>
                <Room />
            </Center>
        </>
    );
};

export default Experience;
