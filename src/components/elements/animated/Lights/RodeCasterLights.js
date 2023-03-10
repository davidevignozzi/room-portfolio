import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const RodeCasterLights = () => {
    const { nodes, materials } = useGLTF('./assets/lights/rodecasterLights.glb');

    const light1 = useRef();
    const light2 = useRef();
    const light3 = useRef();
    const light4 = useRef();
    const light5 = useRef();
    const light6 = useRef();
    const light7 = useRef();

    const lightsGroup1 = [light1, light5, light4, light7];
    const lightsGroup2 = [light2, light3, light6];

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
            {/* Static */}
            <group>
                {/* Power */}
                <mesh
                    geometry={nodes.RodeCasterPowerLights.children[0].geometry}
                    position={nodes.RodeCasterPowerLights.position}
                    scale={nodes.RodeCasterPowerLights.scale}
                >
                    <meshStandardMaterial
                        color={materials.RodeCasterButtonOff.color}
                        emissive={materials.RodeCasterButtonRed.emissive}
                        emissiveIntensity={2}
                        toneMapped={false}
                    />
                </mesh>

                {/* Channels */}
                <group>
                    <mesh
                        geometry={nodes.RodeCasterChannelsLights.children[0].geometry}
                        position={nodes.RodeCasterChannelsLights.position}
                        scale={nodes.RodeCasterChannelsLights.scale}
                    >
                        <meshStandardMaterial
                            color={materials.RodeCasterButtonOff.color}
                            emissive={materials.RodeCasterButtonCeleste.emissive}
                            emissiveIntensity={1.5}
                            toneMapped={false}
                        />
                    </mesh>

                    <mesh
                        geometry={nodes.RodeCasterChannelsLights.children[1].geometry}
                        position={nodes.RodeCasterChannelsLights.position}
                        scale={nodes.RodeCasterChannelsLights.scale}
                    >
                        <meshStandardMaterial
                            color={materials.RodeCasterButtonOff.color}
                            emissive={materials.RodeCasterButtonOrange.emissive}
                            emissiveIntensity={1.5}
                            toneMapped={false}
                        />
                    </mesh>

                    <mesh
                        geometry={nodes.RodeCasterChannelsLights.children[2].geometry}
                        position={nodes.RodeCasterChannelsLights.position}
                        scale={nodes.RodeCasterChannelsLights.scale}
                    >
                        <meshStandardMaterial
                            color={materials.RodeCasterButtonOff.color}
                            emissive={materials.RodeCasterButtonViolet.emissive}
                            emissiveIntensity={1.5}
                            toneMapped={false}
                        />
                    </mesh>

                    <mesh
                        geometry={nodes.RodeCasterChannelsLights.children[3].geometry}
                        position={nodes.RodeCasterChannelsLights.position}
                        scale={nodes.RodeCasterChannelsLights.scale}
                    >
                        <meshStandardMaterial
                            color={materials.RodeCasterButtonOff.color}
                            emissive={materials.RodeCasterButtonYellow.emissive}
                            emissiveIntensity={1.25}
                            toneMapped={false}
                        />
                    </mesh>

                    <mesh
                        geometry={nodes.RodeCasterChannelsLights.children[4].geometry}
                        position={nodes.RodeCasterChannelsLights.position}
                        scale={nodes.RodeCasterChannelsLights.scale}
                    >
                        <meshStandardMaterial
                            color={materials.RodeCasterButtonOff.color}
                            emissive={materials.RodeCasterButtonRed.emissive}
                            emissiveIntensity={0}
                            toneMapped={false}
                        />
                    </mesh>
                </group>

                {/* Green */}
                <mesh
                    geometry={nodes.RodeCasterRGLights.children[1].geometry}
                    position={nodes.RodeCasterRGLights.position}
                    scale={nodes.RodeCasterRGLights.scale}
                >
                    <meshStandardMaterial
                        color={materials.RodeCasterButtonOff.color}
                        emissive={materials.RodeCasterButtonGreen.emissive}
                        emissiveIntensity={1}
                        toneMapped={false}
                    />
                </mesh>

                {/* Red */}
                <mesh
                    geometry={nodes.RodeCasterRGLights.children[0].geometry}
                    position={nodes.RodeCasterRGLights.position}
                    scale={nodes.RodeCasterRGLights.scale}
                >
                    <meshStandardMaterial
                        color={materials.RodeCasterButtonOff.color}
                        emissive={materials.RodeCasterButtonRed.emissive}
                        emissiveIntensity={2}
                        toneMapped={false}
                    />
                </mesh>
            </group>

            {/* Animated */}
            <group>
                {/* Side */}
                <group>
                    <mesh
                        ref={light1}
                        geometry={nodes.RodeCasterLights.children[1].geometry}
                        position={nodes.RodeCasterLights.position}
                        scale={nodes.RodeCasterLights.scale}
                    >
                        <meshStandardMaterial
                            color={materials.RodeCasterButtonOff.color}
                            emissive="lightGreen"
                            emissiveIntensity={0}
                            toneMapped={false}
                        />
                    </mesh>
                    <mesh
                        ref={light2}
                        geometry={nodes.RodeCasterLights.children[2].geometry}
                        position={nodes.RodeCasterLights.position}
                        scale={nodes.RodeCasterLights.scale}
                    >
                        <meshStandardMaterial
                            color={materials.RodeCasterButtonOff.color}
                            emissive="cyan"
                            emissiveIntensity={0}
                            toneMapped={false}
                        />
                    </mesh>
                    <mesh
                        ref={light3}
                        geometry={nodes.RodeCasterLights.children[3].geometry}
                        position={nodes.RodeCasterLights.position}
                        scale={nodes.RodeCasterLights.scale}
                    >
                        <meshStandardMaterial
                            color={materials.RodeCasterButtonOff.color}
                            emissive="pink"
                            emissiveIntensity={0}
                            toneMapped={false}
                        />
                    </mesh>
                    <mesh
                        ref={light4}
                        geometry={nodes.RodeCasterLights.children[4].geometry}
                        position={nodes.RodeCasterLights.position}
                        scale={nodes.RodeCasterLights.scale}
                    >
                        <meshStandardMaterial
                            color={materials.RodeCasterButtonOff.color}
                            emissive="violet"
                            emissiveIntensity={0}
                            toneMapped={false}
                        />
                    </mesh>
                    <mesh
                        ref={light5}
                        geometry={nodes.RodeCasterLights.children[5].geometry}
                        position={nodes.RodeCasterLights.position}
                        scale={nodes.RodeCasterLights.scale}
                    >
                        <meshStandardMaterial
                            color={materials.RodeCasterButtonOff.color}
                            emissive="orange"
                            emissiveIntensity={0}
                            toneMapped={false}
                        />
                    </mesh>
                    <mesh
                        ref={light6}
                        geometry={nodes.RodeCasterLights.children[6].geometry}
                        position={nodes.RodeCasterLights.position}
                        scale={nodes.RodeCasterLights.scale}
                    >
                        <meshStandardMaterial
                            color={materials.RodeCasterButtonOff.color}
                            emissive="gold"
                            emissiveIntensity={0}
                            toneMapped={false}
                        />
                    </mesh>
                    <mesh
                        ref={light7}
                        geometry={nodes.RodeCasterLights.children[0].geometry}
                        position={nodes.RodeCasterLights.position}
                        scale={nodes.RodeCasterLights.scale}
                    >
                        <meshStandardMaterial
                            color={materials.RodeCasterButtonOff.color}
                            emissive="crimson"
                            emissiveIntensity={0}
                            toneMapped={false}
                        />
                    </mesh>
                </group>
            </group>
        </group>
    );
};

export default RodeCasterLights;
