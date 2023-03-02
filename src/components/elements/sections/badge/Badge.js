import { useGLTF } from '@react-three/drei';
import React from 'react';

const Badge = () => {
    const { nodes, materials } = useGLTF('./assets/models/badge.glb');
    console.log('🚀 ~ Badge ~ nodes:', nodes);
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
