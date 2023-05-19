import { Cloud } from '@react-three/drei';

const Smoke = () => {
    return (
        <mesh scale={0.0035} position={[0.44, 0.08, 0.58]}>
            <Cloud segments={20} opacity={0.75} speed={1.5} width={15} depth={1} />
        </mesh>
    );
};

export default Smoke;
