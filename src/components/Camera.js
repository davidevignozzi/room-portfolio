import { useEffect, useRef } from 'react';
import useInteractions from '../utils/stores/useInteractions';
import { CameraControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const Camera = () => {
    const { camera } = useThree();
    const CameraControlsRef = useRef();

    const _state = useInteractions((state) => state);

    const loading = {
        // camera: {
        //     x: 0,
        //     y: 1,
        //     z: 0.05,
        //     zoom: 8
        // },
        // target: {
        //     x: 0.454,
        //     y: 0.55,
        //     z: 1
        // }

        camera: {
            x: 5.5,
            y: 5,
            z: -5,
            zoom: 1.8
        },
        target: {
            x: 0,
            y: 0.1,
            z: 0
        }
    };

    const explore = {
        camera: {
            x: 5.5,
            y: 5,
            z: -5,
            zoom: 1.8
        },
        target: {
            x: 0,
            y: 0.1,
            z: 0
        }
    };

    /**
     * Phases
     **/
    const start = useInteractions((state) => state.start);

    useEffect(() => {
        switch (_state.phase) {
            /**
             * Explore
             */
            case 'explore':
                CameraControlsRef.current?.zoomTo(explore.camera.zoom * 0.5, true);
                setTimeout(() => {
                    CameraControlsRef.current?.moveTo(
                        explore.camera.x,
                        explore.camera.y,
                        explore.camera.z,
                        true
                    );
                    CameraControlsRef.current?.zoomTo(explore.camera.zoom, true);
                    CameraControlsRef.current?.setTarget(
                        explore.target.x,
                        explore.target.y,
                        explore.target.z,
                        true
                    );
                }, 1000);
                break;

            default:
                /**
                 * Loading
                 */
                CameraControlsRef.current?.setPosition(
                    loading.camera.x,
                    loading.camera.y,
                    loading.camera.z
                );
                CameraControlsRef.current?.zoom(loading.camera.zoom);
                CameraControlsRef.current?.setTarget(
                    loading.target.x,
                    loading.target.y,
                    loading.target.z
                );
                break;
        }
    }, [_state.phase]);

    setTimeout(() => {
        // start();
    }, 10000);

    return (
        // <OrbitControls
        //     camera={camera}
        //     gl={gl}
        //     target={[target.x, target.y, target.z]}
        //     // enablePan={false}
        //     rotateSpeed={0.2}
        //     zoomSpeed={2}
        //     // minPolarAngle={0}
        //     // maxPolarAngle={Math.PI / 2}
        //     // minAzimuthAngle={Math.PI / 2}
        //     // maxAzimuthAngle={Math.PI}
        // />
        <CameraControls
            ref={CameraControlsRef}
            camera={camera}
            enabled
            draggingDampingFactor={true}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={Math.PI / 2}
            maxAzimuthAngle={Math.PI}
            polarRotateSpeed={0.25}
            azimuthRotateSpeed={0.25}
            smoothTime={2}
        />
    );
};

export default Camera;
