import useInteractions from '../utils/stores/useInteractions';

const MonitorScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const state = useInteractions((state) => state);

    return (
        <group>
            <mesh
                geometry={nodes.Monitor.geometry}
                position={nodes.Monitor.position}
                rotation={nodes.Monitor.rotation}
                scale={nodes.Monitor.scale}
                material={bakedMaterial}
                onClick={() => {
                    state.projects();
                }}
            />

            {/* MonitorScreen */}
            <mesh
                geometry={nodes.MonitorScreen.geometry}
                position={nodes.MonitorScreen.position}
                rotation={nodes.MonitorScreen.rotation}
                scale={nodes.MonitorScreen.scale}
                material={bakedMaterial}
                onClick={() => {
                    state.projects();
                }}
            />
        </group>
    );
};

export default MonitorScene;
