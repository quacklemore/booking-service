import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CalendarWeek from './calendarWeek.jsx';
import DaysOfTheWeek from './DaysOfTheWeek.jsx';

import Calendar from '../lib/calendar.js';

const Month = styled.table`
    background: palevioletred;
    display: grid;
    grid-template-areas:
      'days-of-the-week'
      'week1'
      'week2'
      'week3'
      'week4';
      grid-template-rows: 1fr 3fr 3fr 3fr 3fr;

  `;

var CalendarMonth = ({month, year}) => {
  let cal = new Calendar();
  let weeks = cal.daysInWeeks(month, year);
  let first = cal.firstDay(month,year);
  return (
    <Month>
      <thead>
        <DaysOfTheWeek />
      </thead>
      <tbody>
        { weeks.map((week, index) => <CalendarWeek weeks={weeks} start={(index === 0) ? first : 0} week={index} key={index}/> )}
      </tbody>
    </Month>
  );
}

export default CalendarMonth;