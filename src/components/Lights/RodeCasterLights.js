import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const RodeCasterLights = (props) => {
    const nodes = props.nodes;

    const light1 = useRef();
    const light2 = useRef();
    const light3 = useRef();
    const light4 = useRef();
    const light5 = useRef();
    const light6 = useRef();
    const light7 = useRef();
    const light8 = useRef();

    const lightsGroup1 = [light1, light4, light5, light8];
    const lightsGroup2 = [light2, light3, light6, light7];

    useFrame(({ clock }) => {
        lightsGroup1.forEach((light) => {
            light.current.material.emissiveIntensity = (Math.sin(clock.getElapsedTime()) + 1) * 0.5;
        });
        lightsGroup2.forEach((light) => {
            light.current.material.emissiveIntensity = (Math.cos(clock.getElapsedTime()) + 1) * 0.5;
        });
    });

    return (
        <group>
            {/* PowerButton */}
            <mesh
                geometry={nodes.RodeCasterPowerLights.geometry}
                position={nodes.RodeCasterPowerLights.position}
                scale={nodes.RodeCasterPowerLights.scale}
            >
                <meshStandardMaterial
                    color="#a0a0a0"
                    emissive="#BC0000"
                    emissiveIntensity={3.5}
                    toneMapped={false}
                />
            </mesh>

            {/* Channels */}
            <mesh
                geometry={nodes.RodeCasterChannelsLights.geometry}
                position={nodes.RodeCasterChannelsLights.position}
                scale={nodes.RodeCasterChannelsLights.scale}
            >
                <meshStandardMaterial
                    color="#A0A0A0"
                    emissive="white"
                    emissiveIntensity={0}
                    toneMapped={false}
                />
            </mesh>

            {/* Side */}
            <group>
                <mesh
                    ref={light1}
                    geometry={nodes.RodeCasterLights000.geometry}
                    position={nodes.RodeCasterLights000.position}
                    scale={nodes.RodeCasterLights000.scale}
                >
                    <meshStandardMaterial
                        color="#A0A0A0"
                        emissive="lightGreen"
                        emissiveIntensity={0}
                        toneMapped={false}
                    />
                </mesh>
                <mesh
                    ref={light2}
                    geometry={nodes.RodeCasterLights001.geometry}
                    position={nodes.RodeCasterLights001.position}
                    scale={nodes.RodeCasterLights001.scale}
                >
                    <meshStandardMaterial
                        color="#A0A0A0"
                        emissive="cyan"
                        emissiveIntensity={0}
                        toneMapped={false}
                    />
                </mesh>
                <mesh
                    ref={light3}
                    geometry={nodes.RodeCasterLights002.geometry}
                    position={nodes.RodeCasterLights002.position}
                    scale={nodes.RodeCasterLights002.scale}
                >
                    <meshStandardMaterial
                        color="#A0A0A0"
                        emissive="pink"
                        emissiveIntensity={0}
                        toneMapped={false}
                    />
                </mesh>
                <mesh
                    ref={light4}
                    geometry={nodes.RodeCasterLights003.geometry}
                    position={nodes.RodeCasterLights003.position}
                    scale={nodes.RodeCasterLights003.scale}
                >
                    <meshStandardMaterial
                        color="#A0A0A0"
                        emissive="violet"
                        emissiveIntensity={0}
                        toneMapped={false}
                    />
                </mesh>
                <mesh
                    ref={light5}
                    geometry={nodes.RodeCasterLights004.geometry}
                    position={nodes.RodeCasterLights004.position}
                    scale={nodes.RodeCasterLights004.scale}
                >
                    <meshStandardMaterial
                        color="#A0A0A0"
                        emissive="orange"
                        emissiveIntensity={0}
                        toneMapped={false}
                    />
                </mesh>
                <mesh
                    ref={light6}
                    geometry={nodes.RodeCasterLights005.geometry}
                    position={nodes.RodeCasterLights005.position}
                    scale={nodes.RodeCasterLights005.scale}
                >
                    <meshStandardMaterial
                        color="#A0A0A0"
                        emissive="gold"
                        emissiveIntensity={0}
                        toneMapped={false}
                    />
                </mesh>
                <mesh
                    ref={light7}
                    geometry={nodes.RodeCasterLights006.geometry}
                    position={nodes.RodeCasterLights006.position}
                    scale={nodes.RodeCasterLights006.scale}
                >
                    <meshStandardMaterial
                        color="#A0A0A0"
                        emissive="crimson"
                        emissiveIntensity={0}
                        toneMapped={false}
                    />
                </mesh>
                <mesh
                    ref={light8}
                    geometry={nodes.RodeCasterLights007.geometry}
                    position={nodes.RodeCasterLights007.position}
                    scale={nodes.RodeCasterLights007.scale}
                >
                    <meshStandardMaterial
                        color="#A0A0A0"
                        emissive="cyan"
                        emissiveIntensity={0}
                        toneMapped={false}
                    />
                </mesh>
            </group>

            {/* Red & Green */}
            <group>
                <mesh
                    geometry={nodes.RodeCasterGreenLights.geometry}
                    position={nodes.RodeCasterGreenLights.position}
                    scale={nodes.RodeCasterGreenLights.scale}
                >
                    <meshStandardMaterial
                        color="#A0A0A0"
                        emissive="lightGreen"
                        emissiveIntensity={0.75}
                        toneMapped={false}
                    />
                </mesh>

                <mesh
                    geometry={nodes.RodeCasterRedLights.geometry}
                    position={nodes.RodeCasterRedLights.position}
                    scale={nodes.RodeCasterRedLights.scale}
                >
                    <meshStandardMaterial
                        color="#A0A0A0"
                        emissive="red"
                        emissiveIntensity={1.875}
                        toneMapped={false}
                    />
                </mesh>
            </group>
        </group>
    );
};

export default RodeCasterLights;
