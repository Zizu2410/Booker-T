import React, { useState, useEffect } from 'react'
import './Categories.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MachineLearning from '../../assets/d1.jpg'
import { Button } from '@material-ui/core'
import axios from '../../axios'


const Categories = (props) => {

    const [courses,setCourses] = useState([])

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

    return (
        <div className='categories'>
            <h1 className='categories__heading'>TOP COURSES</h1>
            <Slider className='categories__slider' {...setting}>
               
                <div className='categories__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='categories__buy'>
                        <p>$398</p>
                        <Button className='categories__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='categories__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='categories__buy'>
                        <p>$398</p>
                        <Button className='categories__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='categories__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='categories__buy'>
                        <p>$398</p>
                        <Button className='categories__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='categories__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='categories__buy'>
                        <p>$398</p>
                        <Button className='categories__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='categories__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='categories__buy'>
                        <p>$398</p>
                        <Button className='categories__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='categories__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='categories__buy'>
                        <p>$398</p>
                        <Button className='categories__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='categories__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='categories__buy'>
                        <p>$398</p>
                        <Button className='categories__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='categories__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='categories__buy'>
                        <p>$398</p>
                        <Button className='categories__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='categories__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='categories__buy'>
                        <p>$398</p>
                        <Button className='categories__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='categories__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='categories__buy'>
                        <p>$398</p>
                        <Button className='categories__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='categories__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='categories__buy'>
                        <p>$398</p>
                        <Button className='categories__buyButton'>Buy Course</Button>
                    </div>
                </div>
                
            </Slider>
        </div>
    )
}

export default Categories
