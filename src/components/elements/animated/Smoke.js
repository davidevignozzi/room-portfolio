import { Cloud } from '@react-three/drei';

// position={[-0.575, 0.9, 1.74]}

const Smoke = () => {
    return (
        <mesh scale={0.0035} position={[-0.577, 0.86, 1.74]}>
            <Cloud opacity={0.15} speed={1} width={10} depth={1.25} />
        </mesh>
    );
};

export default Smoke;
