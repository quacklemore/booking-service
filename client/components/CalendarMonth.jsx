import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CalendarWeek from './calendarWeek.jsx';
import DaysOfTheWeek from './DaysOfTheWeek.jsx';

import Calendar from '../helpers/calendar.js';

const Month = styled.table`
    border-color: #e0e0e0;
    border-width: 0 0 0 2px;
    border-style: solid;
    padding: 0 16px;
    margin: 12px 0;
  `;

var CalendarMonth = ({month, year, setCheckIn}) => {
  let cal = new Calendar();
  let weeks = cal.daysInWeeks(month, year);
  let first = cal.firstDay(month,year);
  return (
    <Month>
      <thead>
        <DaysOfTheWeek />
      </thead>
      <tbody>
        { weeks.map((week, index) => <CalendarWeek weeks={weeks} start={(index === 0) ? first : 0} week={index} key={index} setCheckIn={setCheckIn} month={month} year={year}/> )}
      </tbody>
    </Month>
  );
}

export default CalendarMonth;