import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import { Check } from '@material-ui/icons'
import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './Teach.css'
const Teach = () => {
    return (
        <>
            <Header />
            <div className='teach'>
                <div className='teach__text'>
                    <h2>Schedule a Demo Class With Us</h2>
                    <h3>
                        See why teachers choose Booker-T to teach students
                    </h3>
                    <h4>
                        In your Demo, learn more about
                    </h4>
                    <div className='teach__points'>
                        <Check />
                        <p>Teach Thousands of Students</p>
                    </div>
                    <div className='teach__points'>
                        <Check />
                        <p>On success earn upto $10,000 per month</p>
                    </div>
                </div>
                <div className='teach__form'>
                    <form>
                        <FormControl>
                            <InputLabel>
                                Full Name
                            </InputLabel>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <InputLabel>
                                Email
                            </InputLabel>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <InputLabel>
                                Phone Number
                            </InputLabel>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <InputLabel>
                                Job Title
                            </InputLabel>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <InputLabel>
                                Proefficient Course
                            </InputLabel>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <InputLabel>
                                Experience
                            </InputLabel>
                            <Input />
                        </FormControl>
                        <Button>Submit</Button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Teach
