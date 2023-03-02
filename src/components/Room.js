import StaticRoom from './elements/StaticRoom';
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

const Room = () => {
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
