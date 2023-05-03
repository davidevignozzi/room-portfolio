import { useControls } from 'leva';
import useInteractions from '../../../../utils/stores/useInteractions';
import Boolean from './Boolean';
import Meta from './Meta';
import ThreeJourney from './ThreeJourney';
import Udemy from './Udemy';

const Trophies = () => {
    const state = useInteractions((state) => state);

    const handleClick = () => {
        if (state.phase !== 'education') {
            state.education();
        }
    };

    const { visible } = useControls('EducationTrigger', {
        visible: false
    });

    return (
        <group>
            <mesh
                scale={[0.76, 0.3, 0.25]}
                position={[-0.945, 1.6, 2.22]}
                visible={visible}
                onClick={handleClick}
            >
                <boxGeometry />
                <meshBasicMaterial wireframe />
            </mesh>
            <Boolean />
            <ThreeJourney />
            <Meta />
            <Udemy />
        </group>
    );
};

export default Trophies;
