import { useGLTF } from '@react-three/drei';
import useInteractions from '../../utils/stores/useInteractions';

const EverisBadge = (props) => {
    const { nodes } = useGLTF('./assets/Experiences/everisBadge.glb');
    const everisBadge = props.nodes;
    const pin = props.pin;
    const state = useInteractions((state) => state);

    /**
     * Mouse Enter
     */
    const handleMouseEnter = () => {
        switch (state.phase) {
            case 'explore':
                document.body.style.cursor = 'pointer';
                break;
            case 'experiences':
                document.body.style.cursor = 'zoom-in';
                break;
            case 'everis':
                document.body.style.cursor = 'zoom-out';
                break;
            default:
                break;
        }
    };

    /**
     * Mouse Leave
     */
    const handleMouseLeave = () => {
        switch (state.phase) {
            case 'experiences':
                document.body.style.cursor = 'default';
                break;
            case 'everis':
                document.body.style.cursor = 'default';
                break;
        }
    };

    return (
        <group
            onPointerEnter={handleMouseEnter}
            onPointerLeave={handleMouseLeave}
            onClick={() => {
                if (state.phase === 'experiences') {
                    state.everis();
                }
            }}
        >
            <mesh
                geometry={everisBadge.geometry}
                position={everisBadge.position}
                rotation={everisBadge.rotation}
                scale={0.000685}
                material={nodes.everisBadge.material}
            />

            <mesh
                geometry={pin.geometry}
                position={pin.position}
                rotation={pin.rotation}
                scale={pin.scale}
            >
                <meshBasicMaterial color="#8f0000" />
            </mesh>
        </group>
    );
};

export default EverisBadge;
