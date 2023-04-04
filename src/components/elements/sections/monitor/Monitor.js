import { Html, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import MonitorScreen from './MonitorScreen';

const Monitor = () => {
    const monitor = useRef();
    const { nodes } = useGLTF('./assets/models/monitor.glb');

    return (
        <group>
            {nodes.Monitor.children.map((el) => {
                return (
                    <mesh
                        ref={monitor}
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
                    fixed
                    position={[-0.0025, 0.03, -0.002]}
                    rotation-y={Math.PI}
                    transform
                    occlude
                    distanceFactor={0.07}
                    zIndexRange={2}
                >
                    <MonitorScreen />
                </Html>
            </mesh>
        </group>
    );
};

export default Monitor;
