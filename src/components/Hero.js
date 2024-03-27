import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import circleImg from '../assets/circle.png';
import zigzag from '../assets/zigzags.png';
import plus from '../assets/plus.png';
import dot from '../assets/dots.png';
import cube from '../assets/cube.png';
const Hero = ({ about, social }) => {
    // console.log(about)

    return (
        <div className="hero-section lg:w-[1200px]">
            <div className="absolute faded-text">{about?.name}</div>
            {/* Left Section */}
            <div className="hero-section-left">
                {/* Heading */}
                <div className="hero-section-heading">Hi! {about?.name}</div>
                <div className="hero-section-heading herosection-sub-heading">
                    I am a  <TypeAnimation
                        sequence={[

                            '',
                            1000,
                            about?.title,
                            3000
                        ]}
                        wrapper="span"
                        speed={40}
                        repeat={Infinity}
                        className='role'
                    />
                </div>

                <div className="hero-section-description">
                    {about?.subTitle}.
                </div>

                <div className="btn-pink" id="btn-top">Hire me</div>
                <div className='text-xl font-bold text-[#343d68]'>Connect with me</div>
                <div className='flex flex-row  gap-6 items-center justify-center'>

                    {
                        social && social.map((s) => (
                            <a href={s.url} className=''>
                                <img src={s?.image?.url} alt="" width={50} height={50} />
                            </a>
                        ))
                    }
                </div>
            </div>

            <div className="hero-section-right">
                <div className="absolute icons icon-dots">
                    <img src={dot} alt="dots" />
                </div>
                <div className="absolute icons icon-cube">
                    <img src={cube} alt="cube" />
                </div>
                <div className="absolute icons icon-circle">
                    <img src={circleImg} alt="circle" />
                </div>
                <div className="absolute icons icon-zigzak">
                    <img src={zigzag} alt="zigzag" />
                </div>
                <div className="absolute icons icon-plus">
                    <img src={plus} alt="plus" />
                </div>
                <div className="user-image">
                    <img src={about?.avatar?.url} alt="User" width={345} height={390} />
                </div>
            </div>
            <div className="btn-pink" id="btn-bottom">Hire me</div>
        </div>



    )
}

export default Hero
