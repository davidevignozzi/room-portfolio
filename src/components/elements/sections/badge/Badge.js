import { Html, useGLTF } from '@react-three/drei';
import { useControls } from 'leva';
import React, { useEffect, useState } from 'react';
import { handleResize } from '../../../../utils/resize';
import useInteractions from '../../../../utils/stores/useInteractions';
import EverisBadge from './EverisBadge';

const Badge = () => {
    const { nodes } = useGLTF('./assets/models/badge.glb');
    const state = useInteractions((state) => state);

    /**
     * Get ScreenSize
     */
    const [screenSize, setScreenSize] = useState('');

    useEffect(() => {
        handleResize(setScreenSize);

        window.addEventListener('resize', () => handleResize(setScreenSize));
        return () => window.removeEventListener('resize', () => handleResize(setScreenSize));
    }, []);

    /**
     * onCLick => Experiences
     */
    const handleClick = () => {
        if (state.phase !== 'experiences') {
            state.experiences();
        }
    };

    const { visible } = useControls('ExperiencesTrigger', {
        visible: false
    });

    return (
        <group>
            {(state.phase !== 'experiences') & (state.phase !== 'everis') && (
                <mesh
                    scale={[0.67, 0.5, 0.1]}
                    position={[-1.93, 1.56, 2.3]}
                    visible={visible}
                    onClick={handleClick}
                >
                    <boxGeometry />
                    <meshBasicMaterial wireframe />
                </mesh>
            )}

            <mesh
                geometry={nodes.Badge.geometry}
                position={[
                    nodes.Badge.position.x,
                    nodes.Badge.position.y,
                    nodes.Badge.position.z - 0.0075
                ]}
                scale={nodes.Badge.scale}
                material={nodes.Badge.material}
            >
                <Html
                    position={[-0.0025, 0, -0.00125]}
                    rotation-y={Math.PI}
                    transform
                    distanceFactor={0.02}
                    zIndexRange={2}
                >
                    <EverisBadge />
                </Html>
            </mesh>
            {nodes.Pin.children.map((el) => {
                return (
                    <mesh
                        key={el.uuid}
                        geometry={el.geometry}
                        position={[
                            nodes.Pin.position.x,
                            nodes.Pin.position.y,
                            nodes.Pin.position.z - 0.0075
                        ]}
                        scale={nodes.Pin.scale}
                        material={el.material}
                    />
                );
            })}
        </group>
    );
};

export default Badge;
