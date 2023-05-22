import { useRef } from 'react';
import { Html } from '@react-three/drei';
import useInteractions from '../utils/stores/useInteractions';
import ContactsPhone from './HTML/ContactsPhone';

const PhoneScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const screenMaterial = props.screenMaterial;
    const state = useInteractions((state) => state);
    const screenRef = useRef();

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
                ref={screenRef}
                geometry={nodes.iPhoneScreen.geometry}
                position={nodes.iPhoneScreen.position}
                rotation={nodes.iPhoneScreen.rotation}
                scale={nodes.iPhoneScreen.scale}
                material={screenMaterial}
                onClick={() => {
                    state.contacts();
                }}
            >
                <Html
                    fixed
                    prepend
                    occlude
                    center
                    transform
                    parent={screenRef.current}
                    portal={screenRef.current}
                    zIndexRange={[0, 1]}
                    distanceFactor={0.02}
                    position={[-0.0041, 0.0035, 0]}
                    rotation={[Math.PI / 2, Math.PI, -0.331]}
                >
                    <ContactsPhone />
                </Html>
            </mesh>
        </group>
    );
};

export default PhoneScene;
