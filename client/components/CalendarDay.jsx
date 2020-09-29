import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Day = styled.td`
  border-width: 2px;
  border-style: solid;
  border-color: white;
  margin: -2px 0 0 -2px;
  line-height: 36px;
  height: 36px;
  vertical-align: top;
  position: relative;
  text-align: center;
`;

var CalendarDay = ({day, setCheckIn}) => {
  if (day) {
    return(
      <Day onClick={(event) => setCheckIn(day)}>{day.getDate()}</Day>
    )
  } else {
    return (
      <Day />
    )
  }
}

export default CalendarDay;