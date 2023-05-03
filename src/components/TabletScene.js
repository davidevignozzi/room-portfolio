import useInteractions from '../utils/stores/useInteractions';

const TabletScene = (props) => {
    const nodes = props.nodes;
    const bakedTexture = props.material;
    const state = useInteractions((state) => state);
    return (
        <mesh
            geometry={nodes.WacomCintiq.geometry}
            position={nodes.WacomCintiq.position}
            onClick={() => {
                state.skills();
            }}
        >
            <meshBasicMaterial map={bakedTexture} />
        </mesh>
    );
};

export default TabletScene;
