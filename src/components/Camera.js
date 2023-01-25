import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const Camera = () => {
    const { camera, gl } = useThree();

    return (
        <OrbitControls
            camera={camera}
            gl={gl}
            rotateSpeed={0.1}
            zoomSpeed={0.5}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={Math.PI / 2}
            maxAzimuthAngle={Math.PI}
        />
    );
};

export default Camera;
