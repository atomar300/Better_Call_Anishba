import React from 'react'
import "./Services.css"

const Services = () => {
    return (
        <div className='services-container'>

            <div className='services-heading'>
                <h1>What services I offer</h1>
            </div>

            <div className='services-card-container'>
                <div className='services-card'>
                    <img src='' />
                    <div className='services-card-content'>
                        <h3>Civil Litigation</h3>
                        <p>Description</p>
                        <a href='' className='btn'>Read More</a>
                    </div>
                </div>

                <div className='services-card'>
                    <img src='' />
                    <div className='services-card-content'>
                        <h3>Commercial Litigation</h3>
                        <p>Description</p>
                        <a href='' className='btn'>Read More</a>
                    </div>
                </div>

                <div className='services-card'>
                    <img src='' />
                    <div className='services-card-content'>
                        <h3>Judicial Review</h3>
                        <p>Description</p>
                        <a href='' className='btn'>Read More</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services