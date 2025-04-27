import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./Contact.css"

const Contact = () => {
    return (
            <div className='contact-page'>
                <div className='contact-container'>
                    
                    <div className='contact-heading'>
                        <h1>Contact Me</h1>
                    </div>

                    <div className='contact-wrapper'>
                        <div className='contact-form'>
                            <h3>Send a message</h3>
                            <form>
                                <div className='form-group'>
                                    <input type='text' name='name' placeholder='Your Name' />
                                </div>
                                <div className='form-group'>
                                    <input type='email' name='email' placeholder='Your Email' />
                                </div>
                                <div className='form-group'>
                                    <textarea name='message' placeholder='Your Message'></textarea>
                                </div>
                                <button className='contact-button' type='submit'>Send Message</button>
                            </form>
                        </div>
                        <div className='contact-info'>
                            <h3>Contact Information</h3>
                            <p><LocalPhoneIcon />+1 647 287 1298</p>
                            <p><EmailIcon />dummy@dummyemail.com</p>
                            <p><LocationOnIcon />15 Brunel Court</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Contact