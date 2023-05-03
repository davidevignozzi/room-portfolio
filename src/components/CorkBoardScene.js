import useInteractions from '../utils/stores/useInteractions';

const CorkBoardScene = (props) => {
    const nodes = props.nodes;
    const bakedTexture = props.material;
    const state = useInteractions((state) => state);

    return (
        <group>
            <mesh
                geometry={nodes.CorkBoard.geometry}
                position={nodes.CorkBoard.position}
                onClick={() => {
                    if (state.phase !== 'experiences') {
                        state.experiences();
                    }
                }}
            >
                <meshBasicMaterial map={bakedTexture} />
            </mesh>

            {/* Everis Badge */}
            <group>
                <mesh
                    geometry={nodes.Badge.geometry}
                    position={nodes.Badge.position}
                    onClick={() => {
                        if (state.phase === 'experiences') {
                            state.everis();
                        }
                    }}
                >
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
                <mesh
                    geometry={nodes.Pin.geometry}
                    position={nodes.Pin.position}
                    onClick={() => {
                        if (state.phase === 'experiences') {
                            state.everis();
                        }
                    }}
                >
                    <meshBasicMaterial map={bakedTexture} />
                </mesh>
            </group>
        </group>
    );
};

export default CorkBoardScene;
