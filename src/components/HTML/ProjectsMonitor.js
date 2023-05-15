import React, { useState } from 'react';
import { FcFolder } from 'react-icons/fc';

/**
 * Projects Array
 */
const projectsArray = [
    {
        id: 1,
        name: 'Marble Race',
        ref: 'https://r3f-marble-race.vercel.app/',
        img: './assets/images/MarbleRace.png',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae ipsam sint blanditiis odit. Libero eius officia perspiciatis iste ipsam quaerat, ex veniam consequatur alias saepe, unde eligendi error iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae ipsam sint blanditiis odit. Libero eius officia perspiciatis iste ipsam quaerat, ex veniam consequatur alias saepe, unde eligendi error iusto?',
        tec: ['html', 'css', 'react', 'three', 'react-three-fiber']
    },
    {
        id: 2,
        name: 'Marble Race',
        ref: 'https://r3f-marble-race.vercel.app/',
        img: './assets/images/MarbleRace.png',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae ipsam sint blanditiis odit. Libero eius officia perspiciatis iste ipsam quaerat, ex veniam consequatur alias saepe, unde eligendi error iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae ipsam sint blanditiis odit. Libero eius officia perspiciatis iste ipsam quaerat, ex veniam consequatur alias saepe, unde eligendi error iusto?',
        tec: ['html', 'css', 'react', 'three', 'react-three-fiber']
    },
    {
        id: 3,

        name: 'Marble Race',
        ref: 'https://r3f-marble-race.vercel.app/',
        img: './assets/images/MarbleRace.png',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae ipsam sint blanditiis odit. Libero eius officia perspiciatis iste ipsam quaerat, ex veniam consequatur alias saepe, unde eligendi error iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae ipsam sint blanditiis odit. Libero eius officia perspiciatis iste ipsam quaerat, ex veniam consequatur alias saepe, unde eligendi error iusto?',
        tec: ['html', 'css', 'react', 'three', 'react-three-fiber']
    }
];

const ProjectsMonitor = () => {
    const [selectedProject, setSelectedProject] = useState(projectsArray[0]);

    return (
        <section id="monitor">
            <div className="monitor-window-container">
                <div className="window">
                    <div className="window--tob-bar">
                        <div className="window--tob-bar-circles">
                            <div className="circle bg-red"></div>
                            <div className="circle bg-orange"></div>
                            <div className="circle bg-green"></div>
                        </div>
                    </div>
                    <div className="window-content">
                        <div className="window-sidebar">
                            <h2 className="window-sidebar-title">Projects</h2>
                            <ul className="window-sidebar-list">
                                {projectsArray.map((prj) => {
                                    return (
                                        <li
                                            key={prj.id}
                                            className={`window-sidebar-list-item ${
                                                selectedProject === prj &&
                                                'window-sidebar-list-item-selected'
                                            }`}
                                            onClick={() => setSelectedProject(prj)}
                                        >
                                            {prj.name}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsMonitor;
