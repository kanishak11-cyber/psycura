import React, { useState } from 'react'
import { Calendar } from 'react-calendar'

const Dashboard = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='flex flex-row'> 

            <div className='w-[20vw] h-full white-glassmorphism px-2 py-3 text-center'>
                <Calendar onChange={onChange} value={value} />
            </div>
            <div>
                hey
            </div>
        </div>
    )
}

export default Dashboard
