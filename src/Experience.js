import { Center, Environment, Scroll, ScrollControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import React from 'react';
import Camera from './components/Camera';
import Room from './components/Room';

const Experience = () => {
    return (
        <>
            {/* Debug */}
            {/* <Perf position="top-left" /> */}

            {/* Environment */}
            <Environment resolution={32} preset="city" blur={0.5} />

            <ScrollControls pages={3}>
                {/* Camera */}
                <Camera />

                {/* Objects */}
                <Center position-y={0.5}>
                    <Room />
                </Center>
            </ScrollControls>
        </>
    );
};

export default Experience;
