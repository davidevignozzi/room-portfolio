import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export default create(
    subscribeWithSelector((set) => {
        return {
            /**
             * Phases
             */
            phase: 'loading',

            /**
             * Loaded => Start Animation
             */
            loaded: () => {
                set(() => {
                    return {
                        phase: 'loaded'
                    };
                });
            },

            /**
             * Start
             */
            // When loading end
            start: () => {
                set(() => {
                    return {
                        phase: 'start'
                    };
                });
            },

            /**
             * Explore
             */
            explore: () => {
                set(() => {
                    return {
                        phase: 'explore'
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
            },

            /**
             * Skills
             */
            skills: () => {
                set(() => {
                    return {
                        phase: 'skills'
                    };
                });
            },

            /**
             * Education
             */
            education: () => {
                set(() => {
                    return {
                        phase: 'education'
                    };
                });
            },

            /**
             * Experiences
             */
            experiences: () => {
                set(() => {
                    return {
                        phase: 'experiences'
                    };
                });
            },

            /**
             * Experiences
             */
            everis: () => {
                set(() => {
                    return {
                        phase: 'everis'
                    };
                });
            },

            /**
             * Contacts
             */
            contacts: () => {
                set(() => {
                    return {
                        phase: 'contacts'
                    };
                });
            }
        };
    })
);
