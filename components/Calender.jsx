import React, { useState } from 'react'
import Calendar from 'react-calendar';
const Calender = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='w-[20vw]  white-glassmorphism px-2 py-3 text-center'>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}

export default Calender