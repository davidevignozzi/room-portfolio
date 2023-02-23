import StaticRoom from './elements/StaticRoom';
import Plant from './elements/animated/Plant';

const Room = () => {
    return (
        <group>
            <StaticRoom />
            <Plant />
        </group>
    );
};

export default Room;
