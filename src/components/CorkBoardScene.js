import { isBrowser } from 'react-device-detect';
import useInteractions from '../utils/stores/useInteractions';
import EverisBadge from './Badges/EverisBadge';

const CorkBoardScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const state = useInteractions((state) => state);

    /**
     * Mouse Enter
     */
    const handleMouseEnter = () => {
        if (state.phase === 'explore') {
            document.body.style.cursor = 'pointer';
        }
    };

    /**
     * Mouse Leave
     */
    const handleMouseLeave = () => {
        document.body.style.cursor = 'default';
    };

    /**
     * Handle Phase
     */
    const handlePhase = () => {
        if (isBrowser) {
            if (state.phase !== 'experiences') {
                state.experiences();
            }
        }
    };

    return (
        <group>
            <mesh
                geometry={nodes.CorkBoard.geometry}
                position={nodes.CorkBoard.position}
                rotation={nodes.CorkBoard.rotation}
                scale={nodes.CorkBoard.scale}
                material={bakedMaterial}
                onPointerEnter={handleMouseEnter}
                onPointerLeave={handleMouseLeave}
                onClick={handlePhase}
            />

            {/* Everis Badge */}
            <EverisBadge pin={nodes.Pin} nodes={nodes.everisBadge} />
        </group>
    );
};

export default CorkBoardScene;
