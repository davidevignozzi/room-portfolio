import RoomStructure from './RoomStructure/RoomStructure';
import Consoles from './StaticsElements/Consoles';
import Sofa from './StaticsElements/Sofa';
import Tables from './StaticsElements/Tables';
import Tv from './StaticsElements/Tv';

const Room = () => {
    return (
        <group>
            <RoomStructure />

            {/* Statics Elements */}
            {/* -- Gaming Corner */}
            <group>
                <Sofa />
                <Tables />
                <Consoles />
                <Tv />
            </group>
        </group>
    );
};

export default Room;
