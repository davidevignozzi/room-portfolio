import Plant from './elements/animated/Plant';
import RoomStructure from './elements/RoomStructure';
import StaticsElements from './elements/StaticsElements';

const Room = () => {
    return (
        <group>
            <RoomStructure />
            <StaticsElements />

            {/* Animated Elements */}
            <Plant />
        </group>
    );
};

export default Room;
