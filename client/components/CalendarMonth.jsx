import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CalendarWeek from './calendarWeek.jsx';
import DaysOfTheWeek from './DaysOfTheWeek.jsx';

const Month = styled.div`
    background: palevioletred;
    display: grid;
    grid-template-areas:
      'week1'
      'week2'
      'week3'
      'week4';
      grid-template-rows: 1fr 3fr 3fr 3fr 3fr;

  `;

var CalendarMonth = () => {

  return (
    <Month>
      <DaysOfTheWeek />
      <CalendarWeek />
      <CalendarWeek />
      <CalendarWeek />
      <CalendarWeek />
    </Month>
  );
}

export default CalendarMonth;