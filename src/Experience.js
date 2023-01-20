import { Center, OrbitControls } from '@react-three/drei';
import React from 'react';

const Experience = () => {
    return (
        <>
            <OrbitControls />

            <Center>
                <mesh>
                    <boxGeometry />
                    <meshBasicMaterial color="mediumpurple" />
                </mesh>
            </Center>
        </>
    );
};

export default Experience;
