import { useGLTF } from '@react-three/drei';
import useInteractions from '../../utils/stores/useInteractions';

const EverisBadge = (props) => {
    const { nodes } = useGLTF('./assets/Experiences/everisBadge.glb');
    const everisBadge = props.nodes;
    const pin = props.pin;
    const state = useInteractions((state) => state);

    return (
        <group>
            <mesh
                geometry={everisBadge.geometry}
                position={everisBadge.position}
                rotation={everisBadge.rotation}
                scale={0.000685}
                material={nodes.everisBadge.material}
                onClick={() => {
                    if (state.phase === 'experiences') {
                        state.everis();
                    }
                }}
            />

            <mesh
                geometry={pin.geometry}
                position={pin.position}
                rotation={pin.rotation}
                scale={pin.scale}
                onClick={() => {
                    if (state.phase === 'experiences') {
                        state.everis();
                    }
                }}
            >
                <meshBasicMaterial color="#8f0000" />
            </mesh>
        </group>
    );
};

export default EverisBadge;
