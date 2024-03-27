import React from 'react'
import ServiceCard from './ServiceCard'

const Services = ({ services }) => {
    return (
        <section className='grid w-[100%] place-items-center project-section' id='services'>
            <div className="row">
                <h2 className="page-header mb-4">My Services</h2>
            </div>
            <div className="row">

                {
                    services && services.map((service) => (
                        <ServiceCard  key={service._id} service={service} />
                    ))
                }


            </div>
        </section>

    )
}

export default Services
