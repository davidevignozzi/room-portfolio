import React from 'react';
import styled from 'styled-components';

// ICONS
import {
    FaHtml5,
    FaCss3Alt,
    FaSass,
    FaBootstrap,
    FaVuejs,
    FaReact,
    FaGitAlt
} from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiWebgl, SiThreedotjs, SiGreensock } from 'react-icons/si';

const TabletScreen = () => {
    const Screen = styled.div`
        width: 1920px;
        height: 1080px;
        /* background-color: red; */

        h1 {
            margin: 0.3rem 0;
            text-align: center;
            font-size: 5rem;
        }

        .skills {
            width: 100%;
            height: 90%;
            padding: 2rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            align-items: center;
            /* background-color: red; */

            .skill {
                width: 17rem;
                height: 17rem;
                margin: 2rem 1rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .icon {
                    width: 15rem;
                    height: 15rem;
                    border-radius: 1.5rem;
                    padding: 2rem;
                    background-color: white;

                    .ico {
                        width: 100%;
                        height: 100%;
                    }
                }

                h2 {
                    margin-top: 0.5rem;
                    font-size: 3rem;
                }
            }
        }
    `;

    /**
     * Array Of Skills
     */
    const skillsArray = [
        { name: 'HTML', icon: <FaHtml5 className="ico" />, color: '#e34c26' },
        { name: 'CSS', icon: <FaCss3Alt className="ico" />, color: '#264de4' },
        { name: 'SCSS', icon: <FaSass className="ico" />, color: '#c69' },
        { name: 'Bootstrap', icon: <FaBootstrap className="ico" />, color: '#563d7c' },
        { name: 'Tailwind', icon: <SiTailwindcss className="ico" />, color: '#65bcf4' },
        { name: 'Javascript', icon: <SiJavascript className="ico" />, color: '#f0db4f' },
        { name: 'Vue', icon: <FaVuejs className="ico" />, color: '#42b883 ' },
        { name: 'React', icon: <FaReact className="ico" />, color: '#7cc5d9' },
        { name: 'GSAP', icon: <SiGreensock className="ico" />, color: '#7ca42e' },
        { name: 'WebGL', icon: <SiWebgl className="ico" />, color: '#fa3d22' },
        { name: 'ThreeJs', icon: <SiThreedotjs className="ico" />, color: '#333333' },
        { name: 'Three Fiber', icon: <SiThreedotjs className="ico" />, color: '#333333' },
        { name: 'Git', icon: <FaGitAlt className="ico" />, color: '#f34f29' }
    ];

    return (
        <Screen>
            <h1 className="montserrat">Skills</h1>
            <div className="skills">
                {skillsArray.map((skill, index) => {
                    return (
                        <div key={index} className="skill">
                            <div className="icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <h2 className="montserrat">{skill.name}</h2>
                        </div>
                    );
                })}
            </div>
        </Screen>
    );
};
export default TabletScreen;
