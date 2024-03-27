import React from 'react'
import blob from '../assets/blob vector.png';
const Skills = ({ about, skills }) => {
    return (
        <div id="skills" className="container skills-container">
            <div className="absolute skill-fade-text">Skills</div>
            {/* Left Section */}
            <div className="skill-container-left">
                <h2 className="skill-heading">
                    <span className="caps">M</span>e and
                    <br />
                    MyTech Stack
                </h2>
                <div className="skill-subHeading">
                    <p>
                        Hi Everyone My name is {about?.name}. I am a {about?.title}.{" "}
                        {about?.subTitle}.
                    </p>
                    <p>
                        {about?.description}
                    </p>
                </div>
            </div>
            {/* Right Section */}
            <img src={blob} className="blob-style" alt="" />
            <div className="skill-container-right">
                {
                    skills && skills.map((skill) => (
                        <img src={skill?.image?.url} alt={skill?.name} className="skills-logo" />
                    ))
                }
            </div>
        </div>


    )
}

export default Skills
