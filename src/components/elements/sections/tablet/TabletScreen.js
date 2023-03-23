import React from 'react';
import styled from 'styled-components';

const TabletScreen = () => {
    const Screen = styled.div`
        width: 1920px;
        height: 1080px;

        h1 {
            margin: 0.3rem 0;
            text-align: center;
            font-size: 4rem;
        }

        .skills {
            width: 100%;
            height: 90%;
            padding: 2rem;
            display: flex;
            flex-wrap: wrap;
            flex-shrink: unset;
            justify-content: center;
            align-items: center;
            /* background-color: red; */

            .skill {
                width: 17rem;
                height: 17rem;
                margin: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                img {
                    width: 15rem;
                    height: 15rem;
                    background-color: blue;
                }

                h2 {
                    font-size: 3rem;
                }
            }
        }
    `;

    /**
     * Array Of Skills
     */
    const skillsArray = [
        { name: 'HTML', img: '' },
        { name: 'CSS', img: '' },
        { name: 'Bootstrap', img: '' },
        { name: 'Tailwind', img: '' },
        { name: 'Javascript', img: '' },
        { name: 'Vue', img: '' },
        { name: 'React', img: '' },
        { name: 'GSAP', img: '' },
        { name: 'WebGL', img: '' },
        { name: 'ThreeJs', img: '' },
        { name: 'Three Fiber', img: '' },
        { name: 'Git', img: '' }
    ];

    return (
        <Screen>
            <h1 className="montserrat">Skills</h1>
            <div className="skills">
                {skillsArray.map((skill, index) => {
                    return (
                        <div key={index} className="skill">
                            <img src={skill.img} alt={skill.name} />
                            <h2 className="montserrat">{skill.name}</h2>
                        </div>
                    );
                })}
            </div>
        </Screen>
    );
};
export default TabletScreen;
