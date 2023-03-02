import { useGLTF } from '@react-three/drei';
import React from 'react';

const Badge = () => {
    const { nodes } = useGLTF('./assets/models/badge.glb');
    return (
        <group>
            <mesh
                geometry={nodes.Badge.geometry}
                position={nodes.Badge.position}
                scale={nodes.Badge.scale}
                material={nodes.Badge.material}
            />
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
