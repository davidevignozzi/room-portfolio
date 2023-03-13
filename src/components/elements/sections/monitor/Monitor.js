import { Html, useGLTF } from '@react-three/drei';
import MonitorScreen from './MonitorScreen';

const Monitor = () => {
    const { nodes } = useGLTF('./assets/models/monitor.glb');
    console.log('🚀 ~ Monitor ~ nodes:', nodes);
    return (
        <group>
            {nodes.Monitor.children.map((el) => {
                return (
                    <mesh
                        key={el.uuid}
                        geometry={el.geometry}
                        position={nodes.Monitor.position}
                        scale={nodes.Monitor.scale}
                        rotation={nodes.Monitor.rotation}
                        material={el.material}
                    />
                );
            })}
            <mesh
                geometry={nodes.MonitorScreen.geometry}
                position={nodes.MonitorScreen.position}
                scale={nodes.MonitorScreen.scale}
                rotation={nodes.MonitorScreen.rotation}
            >
                <meshBasicMaterial color="#ece6db" />
                <Html
                    position-z={-0.001}
                    rotation-y={Math.PI}
                    transform
                    occlude
                    // wrapperClass="monitorScreen"
                    distanceFactor={0.5}
                    zIndexRange={2}
                >
                    <MonitorScreen />
                </Html>
            </mesh>
        </group>
    );
};

export default Monitor;
