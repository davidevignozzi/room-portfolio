import useInteractions from '../utils/stores/useInteractions';

const PhoneScene = (props) => {
    const nodes = props.nodes;
    const bakedTexture = props.material;
    const state = useInteractions((state) => state);

    return (
        <group>
            <mesh
                geometry={nodes.iPhone.geometry}
                position={nodes.iPhone.position}
                onClick={() => {
                    state.contacts();
                }}
            >
                <meshBasicMaterial map={bakedTexture} />
            </mesh>

            {/* PhoneScreen */}
            <mesh
                geometry={nodes.iPhoneScreen.geometry}
                position={nodes.iPhoneScreen.position}
                onClick={() => {
                    state.contacts();
                }}
            >
                <meshBasicMaterial map={bakedTexture} />
            </mesh>
        </group>
    );
};

export default PhoneScene;
