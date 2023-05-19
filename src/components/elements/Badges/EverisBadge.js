import { useGLTF } from '@react-three/drei';
import React from 'react';
import useInteractions from '../../../utils/stores/useInteractions';

const EverisBadge = (props) => {
    const { nodes } = useGLTF('./assets/Experiences/everisBadge.glb');
    const position = props.position;
    const state = useInteractions((state) => state);
    const pin = props.pin;

    return (
        <group>
            <primitive
                object={nodes.everisBadge}
                position={position}
                scale={0.00068}
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
