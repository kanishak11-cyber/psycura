import React from 'react'
import Calender from './Calender'
import { BsFillPersonFill } from 'react-icons'
const Sidebar = () => {
    return (
        <div>
            <div>
                <div>
                    <Calender />
                </div>
                <div>
                    <h1>
                        <span><BsFillPersonFill /></span>
                        Profile</h1>
                </div>
            </div>


        </div>
    )
}

export default Sidebar