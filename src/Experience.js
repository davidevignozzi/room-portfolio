import { Html, useProgress } from '@react-three/drei';
import React, { useEffect } from 'react';
import { isBrowser } from 'react-device-detect';
import CameraScene from './components/CameraScene';
import MobileModal from './components/Modal/MobileModal';
import StaticRoom from './components/StaticRoom';
import useInteractions from './utils/stores/useInteractions';

const Experience = () => {
    const { total, progress } = useProgress();
    const state = useInteractions((state) => state);

    useEffect(() => {
        if (total === 7 && progress === 100) {
            // console.log('🚀 Ready');
            // console.log('🚀', total, progress);
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
