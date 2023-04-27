import StaticRoom from './StaticRoom';
import Plant from './elements/animated/Plant';
import Chair from './elements/animated/Chair';
import Laptop from './elements/sections/laptop/Laptop';
import Tablet from './elements/sections/tablet/Tablet';
import Monitor from './elements/sections/monitor/Monitor';
import Phone from './elements/sections/phone/Phone';
import Trophies from './elements/sections/trophies/Trophies';
import Lights from './elements/animated/Lights/Lights';
import Smoke from './elements/animated/Smoke';
import Badge from './elements/sections/badge/Badge';
import { useProgress } from '@react-three/drei';
import useInteractions from '../utils/stores/useInteractions';
import { useEffect } from 'react';

const Room = () => {
    const { progress } = useProgress();
    const state = useInteractions((state) => state);

    /**
     * When everything is loaded set phase loaded
     */
    useEffect(() => {
        if (progress === 100) {
            state.loaded();
        }
    }, [progress]);

    return (
        <group>
            <StaticRoom />

            {/* Animated */}
            <Plant />
            <Chair />
            <Lights />
            <Smoke />

            {/* Sections */}
            <Laptop />
            <Tablet />
            <Monitor />
            <Phone />

            <Trophies />
            <Badge />
        </group>
    );
};

export default Room;
