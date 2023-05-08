import useInteractions from '../utils/stores/useInteractions';

const LaptopScene = (props) => {
    const nodes = props.nodes;
    const bakedTexture = props.material;

    return (
        <group>
            <mesh geometry={nodes.LaptopBase.geometry} position={nodes.LaptopBase.position}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
            <mesh geometry={nodes.Laptop.geometry} position={nodes.Laptop.position}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>

            {/* LaptopScreen */}
            <mesh geometry={nodes.LaptopScreen.geometry} position={nodes.LaptopScreen.position}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
        </group>
    );
};

export default LaptopScene;
