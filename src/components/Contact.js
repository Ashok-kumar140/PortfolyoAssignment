import React from 'react'

const Contact = () => {
    return (
        <div id="contactme" className="">
            <div className=" flex flex-col justify-center items-center">
                <h1 className="contactus-heading">Contact Me</h1>
                <h3 className="contactus-sub-heading">
                    Questions, thoughts, or just want to say hello?
                </h3>
                <div className="contactus-form-container">
                    <form className="form" action="https://formspree.io/f/mlekrnnl" method="post">
                        <div className="formfield-container">
                            <input className="formfield" type="text" name="name" id placeholder="Enter your name" />
                        </div>
                        <div className="formfield-container">
                            <input className="formfield" type="email" name="email" id placeholder="Enter your email address" />
                        </div>
                        <div className="formfield-container">
                            <input className="formfield" type="text" name="subject" id placeholder="Enter your subject" />
                        </div>
                        <div className="formfield-container">
                            <textarea name="message" id cols={30} rows={10} className="formfield formfield-textarea" placeholder="Enter your message" defaultValue={""} />
                        </div>
                        <div>
                            <button type="submit" className="btn-pink" id="submit-btn">
                                Send Message<i className="submit-icon fa-solid fa-paper-plane" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact
