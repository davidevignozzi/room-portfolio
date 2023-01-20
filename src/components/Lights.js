import { useControls } from 'leva';

const Lights = () => {
    const { position } = useControls('Lights', {
        position: {
            value: { x: 2, y: 1, z: 1 },
            step: 0.01,
            joystick: 'invertY'
        }
    });
    return (
        <>
            <ambientLight />
            <directionalLight position={[position.x, position.y, position.z]} />
        </>
    );
};

export default Lights;
