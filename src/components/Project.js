import React from 'react'
import ProjectCard from './ProjectCard'

const Project = ({ projects }) => {
    return (
        <div className="project-section" id="projects">
            <h2 className="page-header">Projects</h2>

            <div className="project-container grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
                {
                    projects && projects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                    ))
                }

            </div>
        </div>
    )
}

export default Project
