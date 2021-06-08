import React, { useState,useEffect } from 'react'
import './CoursesDetails.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MachineLearning from '../../assets/d1.jpg'
import { Button } from '@material-ui/core'
import axios from '../../axios'
import TextTruncate from 'react-text-truncate'
import { useHistory } from 'react-router-dom'

const CyberSecurityDetails = () => {

    const [cyberSecurityCourses, setCyberSecurityCourses] = useState([])
    const history = useHistory()

    useEffect(()=>{
        axios.get('/cybersecuritycourses').then((response)=>{
            setCyberSecurityCourses(response.data)
        })
    },[])

    let setting = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      autoplay:true,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1040,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    }

    const arrayOfCyberSecurityCourses = Object.values(cyberSecurityCourses)
    console.log(arrayOfCyberSecurityCourses)

    return (
        <div className='coursesDetails'>
            <h2 className='coursesDetails__heading'>CYBER SECURITY COURSES</h2>
            <Slider className='coursesDetails__slider' {...setting}>
                
                {arrayOfCyberSecurityCourses.map((cyberSecurityCourse) => (
                    !cyberSecurityCourse[0] &&
                    <div className='coursesDetails__one'>
                        <img src={cyberSecurityCourse.c_image} alt='one' />
                        <TextTruncate line={1} element="h3"
                        truncateText="..."
                        text={cyberSecurityCourse.c_name} />
                        <div className='coursesDetails__buy'>
                            <p>{cyberSecurityCourse.c_price}</p>
                            <Button className='coursesDetails__buyButton'
                            onClick={()=>{
                                history.push(`/course/${cyberSecurityCourse.c_id}`)
                            }}>Buy Course</Button>
                        </div>
                </div>
                ))}
            </Slider>
        </div>
    )
}

export default CyberSecurityDetails