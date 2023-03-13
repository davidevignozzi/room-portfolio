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

                {/* Handle Resize */}
                {/* mac-27  */}
                {screenSize === 'mac-27' && (
                    <mesh
                        scale={0.35}
                        position={[
                            nodes.Scene.position.x - 0.0045,
                            nodes.Scene.position.y,
                            nodes.Scene.position.z
                        ]}
                        rotation={[0.34, Math.PI + 0.6015, 0.2]}
                    >
                        <Html
                            occlude
                            transform
                            // wrapperClass="laptopScreen"
                            distanceFactor={0.5}
                            zIndexRange={2}
                        >
                            <LaptopScreen />
                        </Html>
                    </mesh>
                )}

                {/* mac-24 ✔ */}
                {screenSize === 'mac-24' && (
                    <mesh
                        scale={0.35}
                        position={[
                            nodes.Scene.position.x - 0.0045,
                            nodes.Scene.position.y,
                            nodes.Scene.position.z
                        ]}
                        rotation={[0.34, Math.PI + 0.6015, 0.2]}
                    >
                        <Html
                            occlude
                            transform
                            // wrapperClass="laptopScreen"
                            distanceFactor={0.5}
                            zIndexRange={2}
                        >
                            <LaptopScreen />
                        </Html>
                    </mesh>
                )}

                {/* macbook-pro ✔ */}
                {screenSize === 'macbook-pro' && (
                    <mesh
                        scale={0.35}
                        position={[
                            nodes.Scene.position.x,
                            nodes.Scene.position.y,
                            nodes.Scene.position.z - 0.001
                        ]}
                        rotation={[0.34, Math.PI + 0.6015, 0.2]}
                    >
                        <Html
                            occlude
                            transform
                            // wrapperClass="laptopScreen"
                            distanceFactor={0.5}
                            zIndexRange={2}
                        >
                            <LaptopScreen />
                        </Html>
                    </mesh>
                )}

                {/* ipad-horizontal ✔  */}
                {screenSize === 'ipad-horizontal' && (
                    <mesh
                        scale={0.35}
                        position={[
                            nodes.Scene.position.x,
                            nodes.Scene.position.y,
                            nodes.Scene.position.z
                        ]}
                        rotation={[0.34, Math.PI + 0.6015, 0.2]}
                    >
                        <Html
                            occlude
                            transform
                            // wrapperClass="laptopScreen"
                            distanceFactor={0.5}
                            zIndexRange={2}
                        >
                            <LaptopScreen />
                        </Html>
                    </mesh>
                )}

                {/* ipad-vertical ✔ */}
                {screenSize === 'ipad-vertical' && (
                    <mesh
                        scale={0.35}
                        position={[
                            nodes.Scene.position.x,
                            nodes.Scene.position.y,
                            nodes.Scene.position.z
                        ]}
                        rotation={[0.34, Math.PI + 0.6015, 0.2]}
                    >
                        <Html
                            occlude
                            transform
                            // wrapperClass="laptopScreen"
                            distanceFactor={0.5}
                            zIndexRange={2}
                        >
                            <LaptopScreen />
                        </Html>
                    </mesh>
                )}
            </mesh>
        </group>
    );
};

export default Laptop;
