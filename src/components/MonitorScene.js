import { useRef } from 'react';
import { Html } from '@react-three/drei';
import useInteractions from '../utils/stores/useInteractions';
import ProjectsMonitor from './HTML/ProjectsMonitor';

const MonitorScene = (props) => {
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const screenMaterial = props.screenMaterial;
    const screenRef = useRef();
    const state = useInteractions((state) => state);

    /**
     * Mouse Enter
     */
    const handleMouseEnter = () => {
        if (state.phase === 'explore') {
            document.body.style.cursor = 'pointer';
        }
    };

    /**
     * Mouse Leave
     */
    const handleMouseLeave = () => {
        document.body.style.cursor = 'default';
    };

    /**
     * Handle Phase
     */
    const handlePhase = () => {
        if (state.phase !== 'projects') {
            state.projects();
        }
    };

    return (
        <group
            onPointerEnter={handleMouseEnter}
            onPointerLeave={handleMouseLeave}
            onClick={handlePhase}
        >
            <mesh
                geometry={nodes.Monitor.geometry}
                position={nodes.Monitor.position}
                rotation={nodes.Monitor.rotation}
                scale={nodes.Monitor.scale}
                material={bakedMaterial}
            />

            {/* MonitorScreen */}
            <mesh
                ref={screenRef}
                geometry={nodes.MonitorScreen.geometry}
                position={nodes.MonitorScreen.position}
                rotation={nodes.MonitorScreen.rotation}
                scale={nodes.MonitorScreen.scale}
                material={screenMaterial}
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
                    <section
                        id="monitor"
                        className="fonted centered no-user-select"
                        onMouseOver={handleMouseEnter}
                        onClick={handlePhase}
                    >
                        <ProjectsMonitor />
                    </section>
                </Html>
            </mesh>
        </group>
    );
};

export default MonitorScene;
