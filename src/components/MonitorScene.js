import useInteractions from '../utils/stores/useInteractions';

const MonitorScene = (props) => {
    const nodes = props.nodes;
    const bakedTexture = props.material;
    const state = useInteractions((state) => state);

    return (
        <group>
            <mesh
                geometry={nodes.Monitor.geometry}
                position={nodes.Monitor.position}
                onClick={() => {
                    state.projects();
                }}
            >
                <meshBasicMaterial map={bakedTexture} />
            </mesh>

            {/* MonitorScreen */}
            <mesh
                geometry={nodes.MonitorScreen.geometry}
                position={nodes.MonitorScreen.position}
                onClick={() => {
                    state.projects();
                }}
            >
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
        </group>
    );
};

export default MonitorScene;
