import { Button } from '@material-ui/core'
import React from 'react'
import './Featured.css'
import {useHistory} from 'react-router-dom'

const Featured = () => {

    const history = useHistory()

    return (
        <div className='featured'>
            <h1>The Best Courses On This Planet</h1>
            <h4>Choose from the best 100,000 Courses on our platform</h4>
            <div className='featured__headings'>
                <Button onClick={(e)=>{
                    history.push('/courses')
                }}>Programming</Button>
                <Button onClick={(e)=>{
                    history.push('/courses')
                }}>Excel</Button>
                <Button onClick={(e)=>{
                    history.push('/courses')
                }}>Data Science</Button>
                <Button onClick={(e)=>{
                    history.push('/courses')
                }}>Cloud Computing</Button>
                <Button onClick={(e)=>{
                    history.push('/courses')
                }}>Cyber Security</Button>
                <Button onClick={(e)=>{
                    history.push('/courses')
                }}>Graphic Designing</Button>
            </div>
            <div className='empty__space'>
                .
            </div>
        </div>
    )
}

export default Featured
