import { Html, useGLTF } from '@react-three/drei';
import PhoneScreen from './PhoneScreen';
import useInteractions from '../../../../utils/stores/useInteractions';

const Phone = () => {
    const { nodes } = useGLTF('./assets/models/iphone.glb');

    const phase = useInteractions((state) => state.phase);

    return (
        <group>
            {/* iPhone */}
            {nodes.iPhone.children.map((el) => {
                return (
                    <mesh
                        key={el.uuid}
                        geometry={el.geometry}
                        position={[
                            nodes.iPhone.position.x,
                            nodes.iPhone.position.y - 0.00075,
                            nodes.iPhone.position.z
                        ]}
                        scale={nodes.iPhone.scale}
                        rotation={nodes.iPhone.rotation}
                        material={el.material}
                    />
                );
            })}

            {/* iPhone Screen */}
            <mesh
                geometry={nodes.iPhoneScreen.geometry}
                position={[
                    nodes.iPhoneScreen.position.x,
                    nodes.iPhoneScreen.position.y - 0.001,
                    nodes.iPhoneScreen.position.z
                ]}
                scale={nodes.iPhoneScreen.scale}
                rotation={nodes.iPhoneScreen.rotation}
            >
                <meshBasicMaterial color="#333333" />

                {phase === 'contacts' && (
                    <Html
                        fixed
                        position={[0, 0, 0]}
                        rotation={[Math.PI / 2, Math.PI, -0.33]}
                        transform
                        occlude
                        distanceFactor={0.05}
                        zIndexRange={2}
                    >
                        <PhoneScreen />
                    </Html>
                )}
            </mesh>
        </group>
    );
};

export default Phone;
