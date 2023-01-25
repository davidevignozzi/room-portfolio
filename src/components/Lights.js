import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';
import { useHelper } from '@react-three/drei';
import { useControls } from 'leva';

const Lights = () => {
    const sun = useRef();
    useHelper(sun, DirectionalLightHelper, sun.scale);

    /**
     * Debug Sun
     */
    const { position } = useControls('Sun', {
        position: {
            value: { x: -3, y: 0.5, z: 0 },
            step: 0.01
        }
    });

    return (
        <>
            {/* Sun */}
            <directionalLight
                ref={sun}
                intensity={1.5}
                position={[position.x, position.y, position.z]}
            />
        </>
    );
};

export default Lights;
