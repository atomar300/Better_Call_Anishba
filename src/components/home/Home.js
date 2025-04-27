import React from 'react'
import "./Home.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Home = () => {

    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = "flex"
    }

    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = "none"
    }

    return (
        <div className='headerContainer'>
            <nav>
                <ul className='sidebar'>
                    <li onClick={hideSidebar}><CloseIcon /></li>
                    <li><a to="/">HOME</a></li>
                    <li><a to="/about">ABOUT</a></li>
                    <li><a to="/services">SERVICES</a></li>
                    <li><a to="/contact">CONTACT</a></li>
                </ul>

                <ul>
                    <li className='logo'><a to="/"><h1>Anishba.com</h1></a></li>
                    <li className='hideOnMobile'><a to="/">HOME</a></li>
                    <li className='hideOnMobile'><a to="/about">ABOUT</a></li>
                    <li className='hideOnMobile'><a to="/services">SERVICES</a></li>
                    <li className='hideOnMobile'><a to="/contact">CONTACT</a></li>
                    <li className='menu-button' onClick={showSidebar}><MenuIcon /></li>
                </ul>
            </nav>

        </div>
    )
}

export default Home