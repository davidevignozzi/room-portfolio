import useInteractions from '../../utils/stores/useInteractions';
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

const SkillsTablet = () => {
    const state = useInteractions((state) => state);

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
        { name: 'Three-Fiber', icon: <SiThreedotjs className="ico" />, color: '#333333' },
        { name: 'Git', icon: <FaGitAlt className="ico" />, color: '#f34f29' }
    ];

    /**
     * Handle Phase
     */
    const handlePhase = () => {
        if (state.phase !== 'skills') {
            state.skills();
        }
    };

    return (
        <section id="tablet" className="fonted centered no-user-select" onClick={handlePhase}>
            <h1 className="skills-title"></h1>

            <div className={`skills centered ${state.phase === 'skills' || 'no-pointer-events'}`}>
                {skillsArray.map((skill, index) => {
                    return (
                        <div key={index} className="skill centered">
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <h2 className="skill-name">{skill.name}</h2>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default SkillsTablet;
