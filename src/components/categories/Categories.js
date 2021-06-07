import React, { useState, useEffect } from 'react'
import './Categories.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Button } from '@material-ui/core'
import axios from '../../axios'
import TextTruncate from 'react-text-truncate'
import { useHistory } from 'react-router-dom'
import SingleCourse from '../../screens/singleCourseScreen/SingleCourse'



const Categories = ({sampleCategoryTest,courseName}) => {

    const [courses,setCourses] = useState([])

    const history = useHistory()

   useEffect(()=>{
       axios.get('/featuredcourses').then(response => {
           setCourses(response.data)
       })
   },[])
    

    let setting = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      autoplay:2000,
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
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

    console.log(courses)
    const newCourse = Object.values(courses)
    console.log(newCourse)

    

    return (
        <div className='categories'>
            <h1 className='categories__heading'>TOP COURSES</h1>
            <Slider className='categories__slider' {...setting}>
               
                
                {newCourse.map((course,key)=>(
                    !course[0] &&
                    <div className='categories__one'>
                    <img src={course.c_image} alt='one' />
                    <TextTruncate line={1} element="h3"
                    truncateText="..."
                    text={course.c_name} />
                    <div className='categories__buy'>
                        <p>{course.c_price}</p>
                        <Button className='categories__buyButton' onClick={
                            ()=>{
                                history.push(`/course/${course.c_id}`)
                                
                            }
                        }>Buy Course</Button>
                    </div>
                    </div>
                ))}
                
               
            </Slider>
        </div>
    )
}

export default Categories
