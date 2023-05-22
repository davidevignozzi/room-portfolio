import { useRef } from 'react';
import { Html, Plane } from '@react-three/drei';
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
                geometry={nodes.iPhoneScreen.geometry}
                position={nodes.iPhoneScreen.position}
                rotation={nodes.iPhoneScreen.rotation}
                scale={nodes.iPhoneScreen.scale}
                material={screenMaterial}
                onClick={() => {
                    state.contacts();
                }}
            />

            <Plane
                ref={screenRef}
                args={[0.05, 0.0975]}
                position={[
                    nodes.iPhoneScreen.position.x + 0.0008,
                    nodes.iPhoneScreen.position.y + 0.0035,
                    nodes.iPhoneScreen.position.z - 0.002
                ]}
                rotation={[Math.PI / 2, Math.PI, -0.331]}
                material={screenMaterial}
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
                    distanceFactor={0.019}
                    position={[0, -0.005, 0.0025]}
                >
                    <ContactsPhone />
                </Html>
            </Plane>
        </group>
    );
};

export default PhoneScene;
