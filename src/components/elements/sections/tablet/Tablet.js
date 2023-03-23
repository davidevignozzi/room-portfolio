import { useState, useEffect } from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { handleResize } from '../../../../utils/resize';
import TabletScreen from './TabletScreen';

const Tablet = () => {
    const { nodes } = useGLTF('./assets/models/tablet.glb');

    /**
     * Get ScreenSize
     */
    const [screenSize, setScreenSize] = useState('');

    useEffect(() => {
        handleResize(setScreenSize);

        window.addEventListener('resize', () => handleResize(setScreenSize));
        return () => window.removeEventListener('resize', () => handleResize(setScreenSize));
    }, []);

    return (
        <group>
            {nodes.WacomCintiq.children.map((el) => {
                return (
                    <mesh
                        key={el.uuid}
                        geometry={el.geometry}
                        position={nodes.WacomCintiq.position}
                        rotation={nodes.WacomCintiq.rotation}
                        scale={nodes.WacomCintiq.scale}
                        material={el.material}
                    />
                );
            })}
            <mesh
                geometry={nodes.WacomCintiqScreen.geometry}
                position={nodes.WacomCintiqScreen.position}
                rotation={nodes.WacomCintiqScreen.rotation}
                scale={nodes.WacomCintiqScreen.scale}
            >
                <meshBasicMaterial color="#fefefe" />
                <Html
                    occlude
                    transform
                    position={
                        screenSize === 'mac-24'
                            ? [0.0005, 0.004, -0.003]
                            : screenSize === 'ipad-vertical'
                            ? [0, 0.004, -0.003]
                            : [-0.004, 0.004, -0.003]
                    }
                    rotation={[0.8, Math.PI, 0]}
                    distanceFactor={0.045}
                    zIndexRange={2}
                >
                    <TabletScreen />
                </Html>
            </mesh>
        </group>
    );
};

export default Tablet;
