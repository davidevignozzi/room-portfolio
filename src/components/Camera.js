import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const Camera = () => {
    const { camera, gl } = useThree();

    camera.zoom += 0.1;

    return (
        <OrbitControls
            camera={camera}
            gl={gl}
            enablePan={false}
            rotateSpeed={0.2}
            zoomSpeed={0.5}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={Math.PI / 2}
            maxAzimuthAngle={Math.PI}
        />
    );
};

export default Camera;
