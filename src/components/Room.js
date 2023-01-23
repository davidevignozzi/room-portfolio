import RoomStructure from './RoomStructure/RoomStructure';
import Sofa from './StaticsElements/Sofa';

const Room = () => {
    return (
        <group>
            <RoomStructure />

            {/* Statics Elements */}
            <Sofa />
        </group>
    );
};

export default Room;
