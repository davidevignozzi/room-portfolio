import { useProgress } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import React, { useEffect } from 'react';
import CameraScene from './components/CameraScene';
import StaticRoom from './components/StaticRoom';
import useInteractions from './utils/stores/useInteractions';

const Experience = () => {
    const { total, progress } = useProgress();
    const state = useInteractions((state) => state);

    useEffect(() => {
        if (total === 4 && progress === 100) {
            console.log('🚀 Ready');
            state.loaded();
        }
    }, [total, progress]);

    return (
        <>
            {/* Debug */}
            {/* <Perf position="top-left" /> */}

            {/* Camera */}
            <CameraScene />

            {/* Models */}
            <StaticRoom />
        </>
    );
};

export default Experience;
