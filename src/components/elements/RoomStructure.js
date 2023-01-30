import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const RoomStructure = (props) => {
    const { nodes, materials } = useGLTF('./assets/room-structure.glb');
    return (
        <group {...props} dispose={null}>
            {/* Window Wall */}
            <group position={[-2.39848828, 0.98942631, 0.73725861]}>
                {/* Wall */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019.geometry}
                    material={materials.WallWhite}
                />

                {/* Window */}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019_1.geometry}
                    material={materials.Window}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019_2.geometry}
                    material={materials.WindowEnd}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019_3.geometry}
                    material={materials.WindowEnd}
                />
            </group>

            {/* Desk Wall */}
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wall.geometry}
                material={materials.WallWhite}
                position={[-0.88047022, 0.98942626, 2.4246428]}
            />

            {/* Floor Base */}
            <mesh
                geometry={nodes.Floor.geometry}
                material={nodes.Floor.material}
                position={[-0.88047022, -0.04500015, 0.73725879]}
            />

            {/* Floor */}
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ground.geometry}
                material={materials.Ground}
                position={[-2.35000038, 0.00684722, 2.34660864]}
            />
        </group>
    );
};

export default RoomStructure;

useGLTF.preload('./assets/room-structure.glb');
