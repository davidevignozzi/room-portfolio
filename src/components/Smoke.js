import { Cloud } from '@react-three/drei';

// position={[-0.575, 0.9, 1.74]}

const Smoke = () => {
    return (
        <mesh scale={0.0035} position={[0.4, 0, 0.61]}>
            <Cloud opacity={0.2} speed={1} width={20} depth={1} />
        </mesh>
    );
};

export default Smoke;
