import RoomStructure from './RoomStructure/RoomStructure';
import Alex from './StaticsElements/Alex';
import Consoles from './StaticsElements/Consoles';
import Skadils from './StaticsElements/Skadils';
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

            {/* -- Exposition Area */}
            <group>
                <Alex />
                <Skadils />
            </group>
        </group>
    );
};

export default Room;
