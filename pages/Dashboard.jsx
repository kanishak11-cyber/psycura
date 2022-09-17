import React, { useState } from 'react'
import { Calendar } from 'react-calendar'
import Calender from '../components/Calender';
import Sidebar from '../components/Sidebar';
import Diary from './Diary';

const Dashboard = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='flex flex-row'>
            
            <Diary />
        </div>
    )
}

export default Dashboard
