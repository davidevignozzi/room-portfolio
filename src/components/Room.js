import RoomStructure from './RoomStructure/RoomStructure';
import Sofa from './StaticsElements/Sofa';
import Tables from './StaticsElements/Tables';

const Room = () => {
    return (
        <group>
            <RoomStructure />

            {/* Statics Elements */}
            <Sofa />
            <Tables />
        </group>
    );
};

export default Room;
