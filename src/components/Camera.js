import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const Camera = () => {
    const { camera, gl } = useThree();

    return <OrbitControls camera={camera} gl={gl} />;
};

export default Camera;
