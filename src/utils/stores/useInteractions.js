import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export default create(
    subscribeWithSelector((set) => {
        return {
            // cameraPosition: [5, 4, -6],

            /**
             * Phases
             */
            phase: 'loading',
            opacityControls: 0,

            /**
             * Explore
             */
            // When loading end
            start: () => {
                set(() => {
                    return {
                        phase: 'explore',
                        opacityControls: 1
                    };
                });
            },

            // From projects to explore
            // On scroll up
            back: () => {
                set(() => {
                    return {
                        phase: 'Explore'
                    };
                });
            },

            /**
             * Projects
             */
            projects: () => {
                set(() => {
                    return {
                        phase: 'projects'
                    };
                });
            }
        };
    })
);
