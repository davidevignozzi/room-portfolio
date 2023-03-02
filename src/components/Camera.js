import useInteractions from '../utils/stores/useInteractions';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Camera = () => {
    const { camera, gl } = useThree();

    const cameraPosition = useInteractions((state) => state.cameraPosition);
    camera.position.x = cameraPosition.x;
    camera.position.y = cameraPosition.y;
    camera.position.z = cameraPosition.z;
    camera.zoom += 0.075;

    console.log(camera.position);
    return (
        <OrbitControls
            camera={camera}
            gl={gl}
            // enablePan={false}
            rotateSpeed={0.2}
            zoomSpeed={2}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={Math.PI / 2}
            maxAzimuthAngle={Math.PI}
        />
    );
};

export default Camera;
