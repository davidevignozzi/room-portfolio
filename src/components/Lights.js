import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';
import { useHelper } from '@react-three/drei';
import { useControls } from 'leva';

const Lights = () => {
    const directionalLight = useRef();
    useHelper(directionalLight, DirectionalLightHelper, 0.5);

    const { position } = useControls('Lights', {
        position: {
            value: { x: 2, y: 0.5, z: -2 },
            step: 0.01,
            joystick: 'invertY'
        }
    });
    return (
        <>
            <directionalLight
                intensity={0.5}
                ref={directionalLight}
                position={[position.x, position.y, position.z]}
            />
        </>
    );
};

export default Lights;
