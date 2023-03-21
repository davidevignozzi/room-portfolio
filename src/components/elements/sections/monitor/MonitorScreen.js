import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import useInteractions from '../../../../utils/stores/useInteractions';
import { FcOpenedFolder } from 'react-icons/fc';
import { FcFolder } from 'react-icons/fc';

const MonitorScreen = () => {
    /**
     * Styled
     */
    const ProjectApp = styled.div`
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        background-color: #fefefe;
        color: #333333;
        transition: ease-in 0.1;

        .topbar {
            height: 1rem;
            border-bottom: 1px solid #333333;
            display: flex;
            align-items: center;
            border-radius: 0.5rem 0.5rem 0 0;
            background-color: #333333;
            .circle {
                width: 0.5rem;
                height: 0.5rem;
                margin: 0.25rem;
                border-radius: 99%;

                &:first-of-type {
                    margin-left: 0.5rem;
                }
            }

            .red {
                background-color: red;
            }
            .yellow {
                background-color: orange;
            }
            .green {
                background-color: green;
            }
        }
        h1 {
            text-align: center;
            margin: 0.2rem 0 0 0;
            font-size: 1rem;
        }
    `;

    const Projects = styled.section`
        width: 100%;
        height: 80%;
        padding: 0.1rem;
        border-radius: 0.5rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 8px;
            background-color: #fefefe;
            border-radius: 0.5rem;
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            background-color: #f44a02;
        }
    `;

    const Project = styled.a`
        width: 9.5rem;
        height: 4.5rem;
        background-color: #fefefe;
        margin: 1rem 0.5rem;
        border-radius: 0.5rem;
        text-decoration: none;
        display: flex;
        flex-direction: column;

        &:hover .title {
            background-color: #ed8153;
            transition-duration: 0.2s;
        }

        img {
            width: 100%;
            height: 100%;
            border-radius: 0.5rem 0.5rem 0 0;
        }

        .title {
            width: 100%;
            padding: 0.15rem 0;
            border-radius: 0 0 0.5rem 0.5rem;
            background-color: #f44a02;
            text-align: center;
            font-size: 0.6rem;
            color: #fefefe;
            align-self: flex-end;
        }
    `;

    const Desktop = styled.div`
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        background-color: #fefefe;

        .title {
            text-align: center;
            margin-top: 1rem;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #333333;
            font-size: 3rem;
            font-weight: 1000;
        }

        .folders {
            width: 100%;
            height: 90%;
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

    // In project phase show project app
    const [selectedProject, setSelectedProject] = useState();
    const _state = useInteractions((state) => state);
    const [projectsArray, setProjectsArray] = useState([
        {
            id: 1,
            name: 'Marble Race',
            ref: 'https://r3f-marble-race.vercel.app/',
            img: './assets/images/MarbleRace.png',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae ipsam sint blanditiis odit. Libero eius officia perspiciatis iste ipsam quaerat, ex veniam consequatur alias saepe, unde eligendi error iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti recusandae ipsam sint blanditiis odit. Libero eius officia perspiciatis iste ipsam quaerat, ex veniam consequatur alias saepe, unde eligendi error iusto?',
            tec: ['html', 'css', 'react', 'three', 'react-three-fiber']
        }
    ]);

    const handleClick = (prj) => {
        setSelectedProject(prj === selectedProject ? null : prj);
    };

    return (
        <div className="wrapper-monitor">
            <Desktop className="montserrat">
                <h1 className="title">Projects</h1>
                <div className="folders">
                    {/* List */}
                    <div className="list">
                        {projectsArray.map((prj) => {
                            return (
                                <div
                                    key={prj.id}
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
                                {selectedProject.tec.map((tag) => {
                                    return <span className={`tag ${tag}`}>#{tag}</span>;
                                })}
                            </div>
                            <p>{selectedProject.description}</p>

                            <button>
                                <a href="" target="_blank">
                                    Visit Website
                                </a>
                            </button>
                        </div>
                    )}
                </div>
            </Desktop>
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
