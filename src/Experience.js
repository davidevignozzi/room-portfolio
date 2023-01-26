import { Center, Environment, Lightformer } from '@react-three/drei';
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
            <Environment resolution={32} preset="city" background blur={0.5} />

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
