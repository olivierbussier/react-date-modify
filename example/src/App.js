import React, { useState } from 'react'

import { InputDate } from 'react-date-modify'

const App = () => {

  const [currentDate, setCurrentDate] = useState('2012-01-02')
  return (
    <div style={{ maxWidth: 300, width: '100%', margin: '15px auto' }}>
      <h1>Choosen date is : {currentDate}</h1>
      <InputDate name='nom' text='Enter a date' value={currentDate} onDateChange={date => setCurrentDate(date)}/>
    </div>
  )
}

export default App
