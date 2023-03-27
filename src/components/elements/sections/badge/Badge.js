import { Html, useGLTF } from '@react-three/drei';
import React, { useEffect, useState } from 'react';
import { handleResize } from '../../../../utils/resize';
import EverisBadge from './EverisBadge';

const Badge = () => {
    const { nodes } = useGLTF('./assets/models/badge.glb');

    /**
     * Get ScreenSize
     */
    const [screenSize, setScreenSize] = useState('');

    useEffect(() => {
        handleResize(setScreenSize);

        window.addEventListener('resize', () => handleResize(setScreenSize));
        return () => window.removeEventListener('resize', () => handleResize(setScreenSize));
    }, []);

    return (
        <group>
            <mesh
                geometry={nodes.Badge.geometry}
                position={nodes.Badge.position}
                scale={nodes.Badge.scale}
                material={nodes.Badge.material}
            >
                <Html
                    position={[0, 0, -0.00125]}
                    rotation-y={Math.PI}
                    transform
                    distanceFactor={0.02}
                    occlude
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
                        position={nodes.Pin.position}
                        scale={nodes.Pin.scale}
                        material={el.material}
                    />
                );
            })}
        </group>
    );
};

export default Badge;
