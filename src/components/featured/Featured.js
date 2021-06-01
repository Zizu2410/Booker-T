import React from 'react'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured'>
            <h2>The Best Courses On This Planet</h2>
            <p>Choose from the best 100,000 Courses on our platform</p>
            <div className='featured__headings'>
                <h3 >Programming</h3>
                <h3 className='act'>Excel</h3>
                <h3 className='act'>Data Science</h3>
                <h3 className='act'>Cloud</h3>
                <h3 className='act'>Cyber Security</h3>
            </div>
            <div className='empty__space'>
                .
            </div>
        </div>
    )
}

export default Featured
