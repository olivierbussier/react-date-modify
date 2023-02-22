# react-date-modify

A simple-to-use React date picker library with interesting features
- Capability to select date in a calendar
- Navigation between months
- Synchronisation of date entered in input field & calendar
- Locale display


[![NPM](https://img.shields.io/npm/v/react-date-modify)](https://www.npmjs.com/package/react-date-modify) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## :mag_right: Preview
![image](https://raw.githubusercontent.com/olivierbussier/react-date-modify/main/image-doc/screen.png)

## Live demo
https://olivierbussier.github.io/react-date-modify/

## Install

```bash
npm install react-date-modify
```

## Usage

```jsx
import React, { Component } from 'react'

import {Datatable} from 'react-data-table-modify'

const App = () => {

    return <InputDate name={} text={} value={} />

}
```
## Description of props


| Prop | Description |
| ---- | ----------- |
|name|This prop is used to give a name to the input.|
|text|This string is used to define the associated lable message|
|value| This field is the initial value of the InputDate

# example

```jsx
import React from 'react'

import { InputDate } from 'react-date-modify'

const App = () => {

  return (
    <div style={{ maxWidth: 300, width: '100%', margin: '15px auto' }}>
      <InputDate name='nom' text='Enter a date' value='2012-02-02' />
    </div>
  )
}
```

## CSS Structure

Display of InputDate component could be customised easily using css overriding, hereafter the structure of scss in place

```scss
.date-time-picker {
  // Container of whole component
  position: relative;
  input[type="date"] {
    // The input field above the calendar
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    // In order to kill the native calendar
    display: none;
  }
  .calendar {
    position: absolute;
    z-index: 1;
    overflow: hidden;
    &.show {
      // When calendar open
    }
  }

  .header {
    // header line of the calendar
    display: flex;
    h2 {
      // Title of the calendar (current month)
    }
  }

  .days {
    // Grif of month days
    display: grid;
  }

  .day {
    // One day
    display: flex;
  }

  .day-label {
    display: flex;
    // first line (mon, tue, ...)
  }
  .current-month {
    // If the day is in the current month
  }
  .other-month {
    // If the day is not par of the current month
  }
  .selected {
    // the day selected
  }
}
```

## License

MIT © [olivierbussier](https://github.com/olivierbussier)
