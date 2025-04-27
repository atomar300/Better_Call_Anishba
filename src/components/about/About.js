import React from 'react'
import image from './tingey-injury-law-firm-6sl88x150Xs-unsplash.jpg';
import "./About.css"

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-heading'>
                <h1>About</h1>
            </div>
            <div className='about-content'>
                <div className='about-image'>
                    <img src={image} />
                </div>
                <div className='about-text'>
                    <p>
                        Hi there, I'm Anishba Sohail. I started my journey in law after studying business at Toronto Metropolitan University. Later, I went to the UK to dive deep into criminology for my master's degree. I take pride in being a lawyer, dedicating myself to fighting for justice every single day. With my background in business and my passion for law, I'm committed to making sure everyone gets a fair shake.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
