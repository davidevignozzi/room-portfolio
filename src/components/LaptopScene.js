const LaptopScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;

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
                material={bakedMaterial}
            />
        </group>
    );
};

export default LaptopScene;
