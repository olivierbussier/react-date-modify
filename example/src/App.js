import React from 'react'

import { InputDate } from 'react-date-modify'

const App = () => {

  return (
    <div style={{ maxWidth: 300, width: '100%', margin: '15px auto' }}>
      <InputDate name='nom' text='Enter a date' value='2012-02-02' />
    </div>
  )
}

export default App
