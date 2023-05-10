import { Environment } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import React from 'react';
import Camera from './components/Camera';
import CameraScene from './components/CameraScene';
import StaticRoom from './components/StaticRoom';

const Experience = () => {
    return (
        <>
            {/* Debug */}
            <Perf position="top-left" />

            {/* Environment */}
            <Environment resolution={32} preset="city" />

            {/* Camera */}
            {/* <Camera /> */}
            <CameraScene />

            {/* Models */}

            <StaticRoom />
        </>
    );
};

export default Experience;
