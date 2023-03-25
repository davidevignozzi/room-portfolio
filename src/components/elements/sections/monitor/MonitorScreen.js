import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import useInteractions from '../../../../utils/stores/useInteractions';
import { FcFolder } from 'react-icons/fc';

const MonitorScreen = () => {
    /**
     * Styled
     */
    const Desktop = styled.div`
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        background-color: #fefefe;

        .topbar {
            height: 4.5rem;
            border-bottom: 1px solid #333333;
            display: flex;
            align-items: center;
            border-radius: 0.5rem 0.5rem 0 0;
            background-color: #333333;
            .circle {
                width: 2.5rem;
                height: 2.5rem;
                margin: 0 0.75rem;
                border-radius: 99%;

                &:first-of-type {
                    margin-left: 1rem;
                }
            }

            .red {
                cursor: pointer;
                background-color: red;
            }
            .yellow {
                background-color: orange;
            }
            .green {
                background-color: green;
            }
            .title {
                margin-left: 40rem;
                margin-top: 1rem;
                margin-bottom: 1rem;
                font-size: 3rem;
                font-weight: 1000;
                color: #fefefe;
            }
        }

        .folders {
            width: 100%;
            height: calc(100% - 4.5rem);
            padding-top: 1.5rem;
            display: flex;

            .list {
                width: 45%;
                height: 60rem;
                padding: 0.5rem 0;
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                overflow-y: scroll;

                &::-webkit-scrollbar {
                    display: block;
                    width: 1rem;
                    border-radius: 0.5rem;
                    background-color: #d3d3d3;
                }

                &::-webkit-scrollbar-thumb {
                    display: block;
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                    background-color: #333333;
                }

                .folder-wrapper {
                    cursor: pointer;
                    width: 25%;
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    align-items: center;
                    margin: 0 2rem;
                    margin-bottom: 1rem;
                    padding: 1rem 0 0.5rem 0;

                    .folder {
                        width: 8rem;
                        height: 8rem;
                    }

                    .is-selected {
                        background-color: #d3d3d3;
                    }

                    h2 {
                        font-size: 2rem;
                        margin-top: 0.5rem;
                    }
                }

                .is-selected {
                    background-color: #dfdfdf;
                }
            }

            .description {
                width: 55%;
                height: 100%;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;

                h1 {
                    font-size: 3.5rem;
                }

                .tags {
                    margin: 1rem 0;

                    .tag {
                        font-size: 1.8rem;
                        padding: 1rem;
                        margin: 0.75rem;
                        border-radius: 1rem;
                        color: #fefefe;
                        font-weight: 800;
                    }

                    .html {
                        background-color: #df6731;
                    }

                    .css {
                        background-color: #2965f1;
                    }

                    .react {
                        background-color: #7cc5d9;
                    }

                    .three,
                    .react-three-fiber {
                        background-color: #7269eb;
                    }

                    .javascript {
                        background-color: #f0db4f;
                    }
                }

                img {
                    padding: 2rem 15rem;
                    width: 100%;
                    height: auto;
                }

                p {
                    font-size: 2.5rem;
                    overflow-y: scroll;
                    margin: 1rem 2rem;

                    &::-webkit-scrollbar {
                        display: block;
                        width: 1rem;
                        border-radius: 0.5rem;
                    }

                    &::-webkit-scrollbar-thumb {
                        display: block;
                        border-radius: 10px;
                        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
                        background-color: #333333;
                    }
                }

                button {
                    margin: 1rem 0;
                    padding: 1rem 1.5rem;
                    border-radius: 1rem;
                    background-color: #f44a02;

                    a {
                        font-size: 2.5rem;
                        text-decoration: none;
                        color: #fefefe;
                    }
                }
            }
        }
    `;

    /**
     * Is the project folder open?
     */
    const [isFolderOpen, setIsFolderOpen] = useState(true);

    /**
     * Array of projects
     */
    const [projectsArray, setProjectsArray] = useState([
        {
            name: 'Marble Race',
            ref: 'https://r3f-marble-race.vercel.app/',
            img: './assets/images/MarbleRace.png',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae ipsam sint blanditiis odit. Libero eius officia perspiciatis iste ipsam quaerat, ex veniam consequatur alias saepe, unde eligendi error iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae ipsam sint blanditiis odit. Libero eius officia perspiciatis iste ipsam quaerat, ex veniam consequatur alias saepe, unde eligendi error iusto?',
            tec: ['html', 'css', 'react', 'three', 'react-three-fiber']
        }
    ]);

    /**
     * Project is shown
     */
    const [selectedProject, setSelectedProject] = useState(projectsArray[0]);

    /**
     * On click change the selected project
     */
    const handleClick = (prj) => {
        setSelectedProject(prj === selectedProject ? null : prj);
    };

    return (
        <div className="wrapper-monitor">
            {isFolderOpen ? (
                /**
                 * Folder opened
                 */
                <Desktop className="montserrat">
                    <div className="topbar">
                        <div className="circle red" onClick={() => setIsFolderOpen(false)}></div>
                        <div className="circle yellow"></div>
                        <div className="circle green"></div>
                        <h1 className="title">Projects</h1>
                    </div>

                    <div className="folders">
                        {/* List */}
                        <div className="list">
                            {projectsArray.map((prj, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`folder-wrapper ${
                                            selectedProject === prj ? 'is-selected' : ''
                                        }`}
                                        onClick={() => handleClick(prj)}
                                    >
                                        <FcFolder className="folder" />
                                        <h2>{prj.name}</h2>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Description */}
                        {selectedProject !== undefined && (
                            <div className="description">
                                <h1>{selectedProject.name}</h1>
                                <img src={selectedProject.img} alt={selectedProject.name} />
                                <div className="tags">
                                    {selectedProject.tec.map((tag, index) => {
                                        return (
                                            <span key={index} className={`tag ${tag}`}>
                                                #{tag}
                                            </span>
                                        );
                                    })}
                                </div>
                                <p>{selectedProject.description}</p>

                                <button>
                                    <a href={selectedProject.ref} target="_blank">
                                        Visit Website
                                    </a>
                                </button>
                            </div>
                        )}
                    </div>
                </Desktop>
            ) : (
                /**
                 * Folder Closed
                 */
                <div className="folder-closed" onClick={() => setIsFolderOpen(true)}>
                    <FcFolder className="folder-icon" />
                    <h1 className="montserrat">Projects</h1>
                </div>
            )}
        </div>
    );
};

export default MonitorScreen;

/*
    {isVisible && (
        <ProjectApp>
            <div className="topbar">
                <div className="circle red"></div>
                <div className="circle yellow"></div>
                <div className="circle green"></div>
            </div>
            <h1 className="montserrat">Projects</h1>

            <Projects>
                {projectsArr.map((prj) => {
                    return (
                        <Project key={prj.id} target="_blank" href={prj.ref}>
                            <img src={prj.img} alt={prj.name} />
                            <div className="title montserrat">{prj.name}</div>
                        </Project>
                    );
                })}
            </Projects>
        </ProjectApp>
    )} 
*/
