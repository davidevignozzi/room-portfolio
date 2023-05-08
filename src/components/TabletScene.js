import useInteractions from '../utils/stores/useInteractions';

const TabletScene = (props) => {
    const nodes = props.nodes;
    const bakedTexture = props.material;
    const state = useInteractions((state) => state);
    return (
        <group>
            <mesh
                geometry={nodes.WacomCintiq.geometry}
                position={nodes.WacomCintiq.position}
                onClick={() => {
                    state.skills();
                }}
            >
                <meshBasicMaterial map={bakedTexture} />
            </mesh>

            {/* TabletScreen */}
            <mesh
                geometry={nodes.WacomCintiqScreen.geometry}
                position={nodes.WacomCintiqScreen.position}
                onClick={() => {
                    state.skills();
                }}
            >
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
        </group>
    );
};

export default TabletScene;
