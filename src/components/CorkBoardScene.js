import useInteractions from '../utils/stores/useInteractions';
import EverisBadge from './elements/Badges/EverisBadge';

const CorkBoardScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const state = useInteractions((state) => state);

    return (
        <group>
            <mesh
                geometry={nodes.CorkBoard.geometry}
                position={nodes.CorkBoard.position}
                rotation={nodes.CorkBoard.rotation}
                scale={nodes.CorkBoard.scale}
                material={bakedMaterial}
                onClick={() => {
                    if (state.phase !== 'experiences') {
                        state.experiences();
                    }
                }}
            />

            {/* Everis Badge */}
            <EverisBadge position={nodes.Badge.position} pin={nodes.Pin} />
        </group>
    );
};

export default CorkBoardScene;
