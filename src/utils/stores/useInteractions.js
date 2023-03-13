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

            /**
             * Explore
             */
            // When loading end
            start: () => {
                set((state) => {
                    if (state.phase === 'loading') {
                        return {
                            phase: 'explore'
                        };
                    } else {
                        return {
                            // have to return something
                            // empty object
                        };
                    }
                });
            },

            /**
             * Projects
             */
            projects: () => {
                set((state) => {
                    if (
                        state.phase === 'explore'
                        // ||
                    ) {
                        return {
                            phase: 'projects'
                        };
                    } else {
                        return {
                            // have to return something
                            // empty object
                        };
                    }
                });
            }
        };
    })
);
