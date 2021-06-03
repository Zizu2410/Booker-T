import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import { Facebook, LinkedIn, Twitter } from '@material-ui/icons'
import React from 'react'
import Logo from '../../assets/BT_logo_2019.svg.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__body'>
                <div className='footer__left'>
                    <img src={Logo} alt='Logo' />
                    <p>The Best Courses on the Planet That Will Enhance Your Learning and make you the best in your domain</p>
                    <div className='footer__follow'>
                        <h3>Follow Us</h3>
                        <div className='footer__follow__icons'>
                            <Facebook className='footer__facebook' />
                            <Twitter className='footer__twitter' />
                            <LinkedIn className='footer__linkedin' />
                        </div>
                    </div>
                </div>
                <div className='footer__center1'>
                    <h3>Services</h3>
                    <ul>
                        <li>Web Development</li>
                        <li>Cloud Architect</li>
                        <li>Accounting</li>
                        <li>Security</li>
                        <li>Hacking</li>
                        <li>designing</li>
                    </ul>
                </div>
                <div className='footer__center2'>
                    <h3>Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Portfolio</li>
                        <li>Partners</li>
                        <li>Courses</li>
                    </ul>
                </div>
                <div className='footer__right'>
                    <h3>Subscribe</h3>
                    <form>
                        <FormControl>
                            <InputLabel>
                                Name
                            </InputLabel>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <InputLabel>
                                Email
                            </InputLabel>
                            <Input />
                        </FormControl>
                        <Button variant='contained' color='secondary'>Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
