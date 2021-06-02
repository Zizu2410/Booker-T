import React from 'react'
import './CoursesDetails.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MachineLearning from '../../assets/d1.jpg'
import { Button } from '@material-ui/core'


const CoursesDetails = () => {

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

    return (
        <div className='coursesDetails'>
            <h2 className='coursesDetails__heading'>PROGRAMMING COURSES</h2>
            <Slider className='coursesDetails__slider' {...setting}>
                <div className='coursesDetails__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='coursesDetails__buy'>
                        <p>$398</p>
                        <Button className='coursesDetails__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='coursesDetails__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='coursesDetails__buy'>
                        <p>$398</p>
                        <Button className='coursesDetails__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='coursesDetails__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='coursesDetails__buy'>
                        <p>$398</p>
                        <Button className='coursesDetails__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='coursesDetails__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='coursesDetails__buy'>
                        <p>$398</p>
                        <Button className='coursesDetails__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='coursesDetails__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='coursesDetails__buy'>
                        <p>$398</p>
                        <Button className='coursesDetails__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='coursesDetails__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='coursesDetails__buy'>
                        <p>$398</p>
                        <Button className='coursesDetails__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='coursesDetails__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='coursesDetails__buy'>
                        <p>$398</p>
                        <Button className='coursesDetails__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='coursesDetails__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='coursesDetails__buy'>
                        <p>$398</p>
                        <Button className='coursesDetails__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='coursesDetails__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='coursesDetails__buy'>
                        <p>$398</p>
                        <Button className='coursesDetails__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='coursesDetails__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='coursesDetails__buy'>
                        <p>$398</p>
                        <Button className='coursesDetails__buyButton'>Buy Course</Button>
                    </div>
                </div>
                <div className='coursesDetails__one'>
                    <img src={MachineLearning} alt='one' />
                    <h3>Machine Learning Mastery</h3>
                    <div className='coursesDetails__buy'>
                        <p>$398</p>
                        <Button className='coursesDetails__buyButton'>Buy Course</Button>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default CoursesDetails
