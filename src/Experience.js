import { Center, Environment } from '@react-three/drei';
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
            <Environment
                files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr"
                background
                blur={0.5}
            />

            {/* Lights */}
            <Lights />

            {/* Objects */}
            <Center position-y={0.5}>
                <Room />
            </Center>
        </>
    );
};

export default Experience;
