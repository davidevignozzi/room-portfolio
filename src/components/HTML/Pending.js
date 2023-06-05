import { Html } from '@react-three/drei';
import { isBrowser } from 'react-device-detect';

const Pending = () => {
    return (
        isBrowser && (
            <Html center wrapperClass="pending">
                <span className="loader"></span>
            </Html>
        )
    );
};

export default Pending;
