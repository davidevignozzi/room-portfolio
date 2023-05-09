import useInteractions from '../utils/stores/useInteractions';

const PhoneScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const screenMaterial = props.screenMaterial;
    const state = useInteractions((state) => state);

    return (
        <group>
            <mesh
                geometry={nodes.iPhone.geometry}
                position={nodes.iPhone.position}
                rotation={nodes.iPhone.rotation}
                scale={nodes.iPhone.scale}
                material={bakedMaterial}
                onClick={() => {
                    state.contacts();
                }}
            />

            {/* PhoneScreen */}
            <mesh
                geometry={nodes.iPhoneScreen.geometry}
                position={nodes.iPhoneScreen.position}
                rotation={nodes.iPhoneScreen.rotation}
                scale={nodes.iPhoneScreen.scale}
                material={screenMaterial}
                onClick={() => {
                    state.contacts();
                }}
            />
        </group>
    );
};

export default PhoneScene;
