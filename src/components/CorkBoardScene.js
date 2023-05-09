import useInteractions from '../utils/stores/useInteractions';

const CorkBoardScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const state = useInteractions((state) => state);

    return (
        <group>
            <mesh
                geometry={nodes.CorkBoard.geometry}
                position={nodes.CorkBoard.position}
                rotation={nodes.CorkBoard.rotation}
                scale={nodes.CorkBoard.scale}
                material={bakedMaterial}
                onClick={() => {
                    if (state.phase !== 'experiences') {
                        state.experiences();
                    }
                }}
            />

            {/* Everis Badge */}
            <group>
                <mesh
                    geometry={nodes.Badge.geometry}
                    position={nodes.Badge.position}
                    rotation={nodes.Badge.rotation}
                    scale={nodes.Badge.scale}
                    onClick={() => {
                        if (state.phase === 'experiences') {
                            state.everis();
                        }
                    }}
                >
                    <meshBasicMaterial color="#dddddd" />
                </mesh>
                <mesh
                    geometry={nodes.Pin.geometry}
                    position={nodes.Pin.position}
                    rotation={nodes.Pin.rotation}
                    scale={nodes.Pin.scale}
                    onClick={() => {
                        if (state.phase === 'experiences') {
                            state.everis();
                        }
                    }}
                >
                    <meshBasicMaterial color="#8b0000" />
                </mesh>
            </group>
        </group>
    );
};

export default CorkBoardScene;
