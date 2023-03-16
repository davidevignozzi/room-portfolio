import { useState } from 'react';
import { handleResize } from '../../../../utils/resize';
import { Html, useGLTF } from '@react-three/drei';
import LaptopScreen from './LaptopScreen';
import { useEffect } from 'react';
import { useControls } from 'leva';

const Laptop = () => {
    const { nodes } = useGLTF('./assets/models/laptop.glb');

    const [screenSize, setScreenSize] = useState('');

    // const { x, y, z } = useControls({
    //     x: {
    //         value: 0,
    //         step: 0.001
    //     },
    //     y: {
    //         value: 0,
    //         step: 0.001
    //     },
    //     z: {
    //         value: 0,
    //         step: 0.001
    //     }
    // });

    useEffect(() => {
        handleResize(setScreenSize);

        window.addEventListener('resize', () => handleResize(setScreenSize));
        return () => window.removeEventListener('resize', () => handleResize(setScreenSize));
    }, []);

    return (
        <group>
            {/* laptop base */}
            {nodes.LaptopBase.children.map((el) => {
                return (
                    <mesh
                        key={el.uuid}
                        geometry={el.geometry}
                        position={nodes.LaptopBase.position}
                        rotation={nodes.LaptopBase.rotation}
                        scale={nodes.LaptopBase.scale}
                        material={el.material}
                    />
                );
            })}

            {/* laptop keyboard */}
            <mesh
                geometry={nodes.LaptopKeyboard.geometry}
                position={nodes.LaptopKeyboard.position}
                rotation={nodes.LaptopKeyboard.rotation}
                scale={nodes.LaptopKeyboard.scale}
                material={nodes.LaptopKeyboard.material}
            />

            {/* laptop */}
            <mesh
                geometry={nodes.Laptop.geometry}
                position={nodes.Laptop.position}
                rotation={nodes.Laptop.rotation}
                scale={nodes.Laptop.scale}
                material={nodes.Laptop.material}
            />

            {/* laptop screen */}
            <mesh
                geometry={nodes.LaptopScreen.geometry}
                position={nodes.LaptopScreen.position}
                rotation={nodes.LaptopScreen.rotation}
                scale={nodes.LaptopScreen.scale}
            >
                <meshBasicMaterial color="#ece6db" />
                <Html
                    occlude
                    transform
                    rotation={[0.34, Math.PI + 0.6015, 0.2]}
                    distanceFactor={0.15}
                    zIndexRange={2}
                >
                    <LaptopScreen />
                </Html>
            </mesh>
        </group>
    );
};

export default Laptop;
