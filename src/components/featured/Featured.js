import { Button } from '@material-ui/core'
import React from 'react'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured'>
            <h1>The Best Courses On This Planet</h1>
            <p>Choose from the best 100,000 Courses on our platform</p>
            <div className='featured__headings'>
                <Button>Programming</Button>
                <Button>Excel</Button>
                <Button>Data Science</Button>
                <Button>Cloud Computing</Button>
                <Button>Cyber Security</Button>
                <Button>Graphic Designing</Button>
            </div>
            <div className='empty__space'>
                .
            </div>
        </div>
    )
}

export default Featured
