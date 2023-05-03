import useInteractions from '../utils/stores/useInteractions';

const MonitorScene = (props) => {
    const nodes = props.nodes;
    const bakedTexture = props.material;
    const state = useInteractions((state) => state);

    return (
        <mesh
            geometry={nodes.Monitor.geometry}
            position={nodes.Monitor.position}
            onClick={() => {
                state.projects();
            }}
        >
            <meshBasicMaterial map={bakedTexture} />
        </mesh>
    );
};

export default MonitorScene;
