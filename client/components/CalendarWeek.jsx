import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CalendarDay from './CalendarDay.jsx';

const Week = styled.div`
  display: grid;
  grid-template-areas: 'sunday monday tuesday wednesday thursday friday saturday';
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;
var CalendarWeek = () => {
  return (
    <Week>
      <CalendarDay />
      <CalendarDay />
      <CalendarDay />
      <CalendarDay />
      <CalendarDay />
      <CalendarDay />
      <CalendarDay />
    </Week>
  )
}


export default CalendarWeek;