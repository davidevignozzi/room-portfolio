import useInteractions from '../utils/stores/useInteractions';

const TabletScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const state = useInteractions((state) => state);
    return (
        <group>
            <mesh
                geometry={nodes.WacomCintiq.geometry}
                position={nodes.WacomCintiq.position}
                rotation={nodes.WacomCintiq.rotation}
                scale={nodes.WacomCintiq.scale}
                material={bakedMaterial}
                onClick={() => {
                    state.skills();
                }}
            />

            {/* TabletScreen */}
            <mesh
                geometry={nodes.WacomCintiqScreen.geometry}
                position={nodes.WacomCintiqScreen.position}
                rotation={nodes.WacomCintiqScreen.rotation}
                scale={nodes.WacomCintiqScreen.scale}
                material={bakedMaterial}
                onClick={() => {
                    state.skills();
                }}
            />
        </group>
    );
};

export default TabletScene;
