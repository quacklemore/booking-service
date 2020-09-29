import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CalendarDay from './CalendarDay.jsx';

const Week = styled.tr`
  display: grid;
  grid-template-areas: 'sunday monday tuesday wednesday thursday friday saturday';
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;
var CalendarWeek = ({weeks, start, week}) => {
  let days = [];
  let count = 0;
  for ( var i = 0; i < week; i++) {
    count += weeks[i];
  }
  count++;
  for (var i = 0; i < 7; i++) {
    if ((start > 0 && i >= start) || (start === 0 && i < weeks[week])) {
      days.push(count);
      count++;
    } else {
      days.push(undefined);
    }
  }


  return (
    <Week>
      {days.map((day, index) => <CalendarDay day={day} key={index}/>)}
    </Week>
  )
}


export default CalendarWeek;