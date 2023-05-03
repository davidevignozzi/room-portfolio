import useInteractions from '../utils/stores/useInteractions';

const PhoneScene = (props) => {
    const nodes = props.nodes;
    const bakedTexture = props.material;
    const state = useInteractions((state) => state);

    return (
        <mesh
            geometry={nodes.iPhone.geometry}
            position={nodes.iPhone.position}
            onClick={() => {
                state.contacts();
            }}
        >
            <meshBasicMaterial map={bakedTexture} />
        </mesh>
    );
};

export default PhoneScene;
