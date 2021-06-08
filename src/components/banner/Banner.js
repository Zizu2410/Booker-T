import React from 'react'
import './Banner.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Student_1 from '../../assets/student-1.jpg'
import Student_2 from '../../assets/student-2.jpg'
import Student_3 from '../../assets/student-3.jpg'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const Banner = () => {

    let setting = {
        dots:true,
        infinte:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    }
    const history = useHistory()

    return (
        <Slider className='banner' {...setting}>
            <div className='banner__image1'>
                <img src={Student_1} />
                <div className='banner__text'>
                    <h2 className='banner__h2'>Move Beyond</h2>
                    <h2 className='banner__h2'>The Limitations Of</h2>
                    <h2 className='banner__h2'>E-Learning</h2>
                      
                    <div className='banner__buttons'>
                        <Button className='banner__learn' onClick={()=>{
                            history.push('/courses')
                        }}>Learn</Button>
                        <Button className='banner__teach' onClick={()=>{
                            history.push('/teach')
                        }}>Teach</Button>
                    </div>
                </div>
                
            </div>
            <div className='banner__image1'>
                <img src={Student_2} />
                <div className='banner__text'>
                    <h2 className='banner__h2'>Move Beyond</h2>
                    <h2 className='banner__h2'>The Limitations Of</h2>
                    <h2 className='banner__h2'>E-Learning</h2>
                      
                    <div className='banner__buttons'>
                        <Button className='banner__learn'>Learn</Button>
                        <Button className='banner__teach'>Teach</Button>
                    </div>
                </div>
            </div>
            <div className='banner__image1'>
                <img src={Student_3} />
                <div className='banner__text'>
                    <h2 className='banner__h2'>Move Beyond</h2>
                    <h2 className='banner__h2'>The Limitations Of</h2>
                    <h2 className='banner__h2'>E-Learning</h2>
                      
                    <div className='banner__buttons'>
                        <Button className='banner__learn'>Learn</Button>
                        <Button className='banner__teach'>Teach</Button>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Banner
