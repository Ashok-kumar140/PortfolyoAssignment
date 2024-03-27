import React from 'react'

const Navbar = ({ about }) => {
    return (

        <div className="navbar">
            <div className="logo-container">

                <div className="logo-text ">{about?.name}</div>
            </div>
            <div className="nav-items opacity-0 md:opacity-[1] pl-0 md:pl-[4em]">
                <div><a href="#projects">Projects</a></div>
                <div><a href="#services">Services</a></div>
                <div><a href="#skills">Skills</a></div>
                <div><a href="#experience">Experience</a></div>
                <div><a href="#contactme">Contact Me</a></div>
            </div>
        </div>




    )
}

export default Navbar
