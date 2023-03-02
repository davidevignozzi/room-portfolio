import { Html, useGLTF } from '@react-three/drei';
import LaptopScreen from './LaptopScreen';

const Laptop = () => {
    const { nodes } = useGLTF('./assets/models/laptop.glb');
    console.log('🚀 ~ Laptop ~ nodes:', nodes);
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
                <mesh
                    scale={0.35}
                    position={[
                        nodes.Scene.position.x,
                        nodes.Scene.position.y + 0.001,
                        nodes.Scene.position.z - 0.001
                    ]}
                    rotation={[0.34, Math.PI + 0.6015, 0.2]}
                >
                    <Html occlude transform wrapperClass="laptopScreen" distanceFactor={0.5}>
                        <LaptopScreen />
                    </Html>
                </mesh>
            </mesh>
        </group>
    );
};

export default Laptop;
