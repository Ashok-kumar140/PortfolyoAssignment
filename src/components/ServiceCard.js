import React from 'react'

const ServiceCard = ({service}) => {
    return (
        <div className="column">
            <div className="card">
                <div className="icon-wrapper overflow-hidden object-cover">
                    <img src={service?.image?.url} alt="" />
                </div>
                <h3>{service?.name}</h3>
                <p>
                    {service?.desc}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard
