import StaticRoom from './elements/StaticRoom';
import Plant from './elements/animated/Plant';

const Room = () => {
    return (
        <group>
            <StaticRoom />

            {/* Animated */}
            <Plant />
        </group>
    );
};

export default Room;
