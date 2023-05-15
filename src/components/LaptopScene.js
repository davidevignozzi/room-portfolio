import { Html, Plane } from '@react-three/drei';
import { useRef } from 'react';
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
                    distanceFactor={0.06}
                    position={[-0.005, 0, -0.005]}
                    rotation={[0.49, Math.PI + 0.39, 0.21]}
                >
                    <LoadingLaptop />
                </Html>
            </mesh>

            {/* <Plane
                ref={screenRef}
                args={[0.3, 0.2]}
                position={[
                    nodes.LaptopScreen.position.x,
                    nodes.LaptopScreen.position.y + 0.005,
                    nodes.LaptopScreen.position.z - 0.001
                ]}
                rotation={[0.49, Math.PI + 0.39, 0.21]}
                material-color="red"
                // material={screenMaterial}
            >
                <Html fixed center transform distanceFactor={0.1}></Html>
            </Plane> */}
        </group>
    );
};

export default LaptopScene;
