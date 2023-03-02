import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export default create(
    subscribeWithSelector((set) => {
        return {
            // cameraPosition: [5, 4, -6],
            cameraPosition: {
                x: 5.75,
                y: 4,
                z: -6
            },
            /**
             * Phases
             */
            phase: 'loading'
        };
    })
);
