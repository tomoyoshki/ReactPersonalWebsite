import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='top'>
                <div className='top_half'>
                    <Link to="/" className='footer_link'>Main</Link>
                    <Link to="/education" className='footer_link'>Education</Link>
                    <Link to="/portfolio" className='footer_link'>Portfolio</Link>
                    <Link to="/about" className='footer_link'>About</Link>
                </div>
                <div className='top_half'>
                    <a className='icon' href="https://github.com/tomoyoshki" target="_blank" rel='noreferrer'>
                        <GitHubIcon  style={{width: "100%"}}/>
                    </a>
                    <a className='icon' href="https://www.instagram.com/tommy_kimura/" target="_blank" rel='noreferrer'>
                        <InstagramIcon style={{width: "100%"}} />
                    </a>
                    <a className='icon' href="https://www.linkedin.com/in/tomoyoshi-kimura-b6bb011aa/" target="_blank" rel="noreferrer">
                        <LinkedInIcon style={{width: "100%"}}/>
                    </a>
                </div>

                
            </div>
            <div className='bottom'>
                <div className='quote'>ego cogito, ergo sum - I think, therefore I am.</div>
                <div className='right'>© 2021 Tomoyoshi Kimura</div>
            </div>
        </div>
    )
}