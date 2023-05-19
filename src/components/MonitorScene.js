import { Html } from '@react-three/drei';
import { useRef } from 'react';
import useInteractions from '../utils/stores/useInteractions';
import ProjectsMonitor from './HTML/ProjectsMonitor';

const MonitorScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const screenMaterial = props.screenMaterial;
    const state = useInteractions((state) => state);
    const screenRef = useRef();

    return (
        <group>
            <mesh
                geometry={nodes.Monitor.geometry}
                position={nodes.Monitor.position}
                rotation={nodes.Monitor.rotation}
                scale={nodes.Monitor.scale}
                material={bakedMaterial}
                onClick={() => {
                    state.projects();
                }}
            />

            {/* MonitorScreen */}
            <mesh
                ref={screenRef}
                geometry={nodes.MonitorScreen.geometry}
                position={nodes.MonitorScreen.position}
                rotation={nodes.MonitorScreen.rotation}
                scale={nodes.MonitorScreen.scale}
                material={screenMaterial}
                onClick={() => {
                    state.projects();
                }}
            >
                <Html
                    fixed
                    prepend
                    center
                    transform
                    parent={screenRef.current}
                    portal={screenRef.current}
                    zIndexRange={[0, 1]}
                    distanceFactor={0.0775}
                    position={[-0.02, 0.03, -0.004]}
                    rotation-y={Math.PI}
                >
                    <ProjectsMonitor />
                </Html>
            </mesh>
        </group>
    );
};

export default MonitorScene;
