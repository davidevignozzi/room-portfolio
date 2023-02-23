import StaticRoom from './elements/StaticRoom';
import Plant from './elements/animated/Plant';
import Chair from './elements/animated/Chair';
import Laptop from './elements/sections/laptop/Laptop';
import Tablet from './elements/sections/tablet/Tablet';
import Monitor from './elements/sections/monitor/Monitor';
import Phone from './elements/sections/phone/Phone';

const Room = () => {
    return (
        <group>
            <StaticRoom />

            {/* Animated */}
            <Plant />
            <Chair />

            <Laptop />
            <Tablet />
            <Monitor />
            <Phone />
        </group>
    );
};

export default Room;
