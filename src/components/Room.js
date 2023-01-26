import RoomStructure from './RoomStructure/RoomStructure';
import Consoles from './StaticsElements/Consoles';
import Sofa from './StaticsElements/Sofa';
import Tables from './StaticsElements/Tables';

const Room = () => {
    return (
        <group>
            <RoomStructure />

            {/* Statics Elements */}
            {/* -- Gaming Corner */}
            <Sofa />
            <Tables />
            <Consoles />
        </group>
    );
};

export default Room;
