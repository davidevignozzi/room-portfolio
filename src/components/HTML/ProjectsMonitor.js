import React, { useState } from 'react';
import { FaGithub, FaTag } from 'react-icons/fa';

/**
 * Projects Array
 */
const projectsArray = [
    {
        id: 1,
        name: 'Marble Race',
        ref: 'https://r3f-marble-race.vercel.app/',
        code: 'https://github.com/davidevignozzi/threejs-journey/tree/main/react-three-fiber/r3f-jumping-sphere-game',
        img: './assets/images/MarbleRace.png',
        description:
            'The Marble Race is an exciting mini-game where players take control of a ball and navigate through a straight path filled with moving obstacles. The objective is to guide the ball safely to the end of the course while avoiding the obstacles that are strategically placed to hinder progress.',
        tec: ['html', 'css', 'javascript', 'react', 'three', 'react-three-fiber']
    }
];

const ProjectsMonitor = () => {
    const [selectedProject, setSelectedProject] = useState(projectsArray[0]);

    return (
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
                    <div className="window-content-main">
                        <div className="window-content-main-img-tag-wrapper">
                            <div className="window-content-main-img">
                                <img src={selectedProject.img} alt={selectedProject.name} />
                            </div>
                            <ul className="window-content-main-tags">
                                {selectedProject.tec.map((tag, index) => {
                                    return (
                                        <li key={index}>
                                            <FaTag />
                                            <span>{tag}</span>
                                        </li>
                                    );
                                })}
                                <div className="ribbon"></div>
                            </ul>
                            <div></div>
                        </div>
                        <h1 className="window-content-main-title">{selectedProject.name}</h1>
                        <div className="window-content-main-description">
                            {selectedProject.description}
                        </div>
                        <div className="window-content-main-buttons">
                            <button className="window-content-main-code bg-secondary">
                                <a href={selectedProject.code} target="_blank">
                                    <FaGithub /> <span>Source Code</span>
                                </a>
                            </button>
                            <button className="window-content-main-ref bg-blue">
                                <a href={selectedProject.ref} target="_blank">
                                    Open It
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsMonitor;
