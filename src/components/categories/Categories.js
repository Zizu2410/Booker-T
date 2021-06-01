import React from 'react'
import './Categories.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Categories = () => {

    let setting = {
        dots:true,
        infinte:true,
        speed:1000,
        slidesToShow:5,
        slidesToScroll:5,
        autoplay:true
    }

    return (
        <div className='categories'>
            <h1 className='categories__heading'>TOP COURSES</h1>
            <Slider className='categories__slider' {...setting}>
                <div><h1>1</h1></div>
                <div><h1>2</h1></div>
                <div><h1>3</h1></div>
                <div><h1>4</h1></div>
                <div><h1>5</h1></div>
                <div><h1>6</h1></div>
                <div><h1>7</h1></div>
                <div><h1>8</h1></div>
                <div><h1>9</h1></div>
                <div><h1>10</h1></div>
                
            </Slider>
        </div>
    )
}

export default Categories
