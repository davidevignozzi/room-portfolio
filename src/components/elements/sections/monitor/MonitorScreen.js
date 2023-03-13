import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import useInteractions from '../../../../utils/stores/useInteractions';

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

    // In project phase show project app
    const [isVisible, setIsVisible] = useState(false);
    const _state = useInteractions((state) => state);

    useEffect(() => {
        if (_state.phase === 'projects') {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [_state.phase]);

    /**
     * Logic
     */
    // *** Project array
    const projectsArr = [
        {
            id: 1,
            name: 'Marble Race',
            ref: 'https://r3f-marble-race.vercel.app/',
            img: './assets/images/MarbleRace.png'
        }
    ];

    return (
        <div className="wrapper-monitor">
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
        </div>
    );
};

export default MonitorScreen;
