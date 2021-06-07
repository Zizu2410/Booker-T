import React from 'react'
import './Courses.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import CoursesDetails from '../../components/coursesDetails/CoursesDetails'
const Courses = () => {
    return (
        <div className='courses'>
            <Header />
            <div className='courses__programs'>
                <h1>All Courses</h1>
                <h2 className='courses__subHeading'>
                    Courses To Get You Started
                </h2>
            </div>
            <CoursesDetails />
            
            <Footer />
        </div>
    )
}

export default Courses
