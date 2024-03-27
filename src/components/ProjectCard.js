import React from 'react'

const ProjectCard = ({ project }) => {
    console.log("image url", project?.image?.url);
    return (




        <div className="project-card  flex justify-center items-center" id="project1" style={{ "backgroundImage": `url(${project?.image?.url})`, "backgroundSize": 'cover' }}>
            <div className="project-content flex flex-col justify-center items-center">
                <h2 className="project-heading">{project?.title}</h2>
                <p className="project-subHeading text-white">{project?.description.substr(0, 80)}...
                </p>
                <p className="text-lg font-bold text-white">TechStack Used</p>
                <ul className="list-disc">
                    {project && project.techStack.map((skill) => (
                        <li className="">{skill}

                        </li>
                    ))}
                </ul>
                <div className="btn-grp">
                    <a id="btn2" className="but" href={project?.liveurl}>Live</a>
                    <a id="btn2" className="but" href={project?.githuburl}>Github</a>

                </div>
            </div>
        </div >



    )
}

export default ProjectCard
