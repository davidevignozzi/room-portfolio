import StaticRoom from './elements/StaticRoom';
import Plant from './elements/animated/Plant';
import Chair from './elements/animated/Chair';

const Room = () => {
    return (
        <group>
            <StaticRoom />

            {/* Animated */}
            <Plant />
            <Chair />
        </group>
    );
};

export default Room;
