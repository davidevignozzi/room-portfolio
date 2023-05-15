import { useRef } from 'react';
import { Html } from '@react-three/drei';
import LoadingLaptop from './HTML/LoadingLaptop';

const LaptopScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const screenMaterial = props.screenMaterial;
    const screenRef = useRef();

    return (
        <group>
            <mesh
                geometry={nodes.LaptopBase.geometry}
                position={nodes.LaptopBase.position}
                rotation={nodes.LaptopBase.rotation}
                scale={nodes.LaptopBase.scale}
                material={bakedMaterial}
            />

            <mesh
                geometry={nodes.Laptop.geometry}
                position={nodes.Laptop.position}
                rotation={nodes.Laptop.rotation}
                scale={nodes.Laptop.scale}
                material={bakedMaterial}
            />

            {/* LaptopScreen */}
            <mesh
                ref={screenRef}
                geometry={nodes.LaptopScreen.geometry}
                position={nodes.LaptopScreen.position}
                rotation={nodes.LaptopScreen.rotation}
                scale={nodes.LaptopScreen.scale}
                material={screenMaterial}
            >
                <Html
                    fixed
                    center
                    transform
                    occlude
                    parent={screenRef.current}
                    zIndexRange={[0, 1]}
                    distanceFactor={0.06}
                    position={[0, 0, -0.0025]}
                    rotation={[0.4875, Math.PI + 0.39, 0.205]}
                >
                    <LoadingLaptop />
                </Html>
            </mesh>
        </group>
    );
};

export default LaptopScene;
