import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Day = styled.div`
  font-weight: 700;
  flex: 1 0;
  display: inline-block;
  border: 2px solid rgba(0,0,0,0);
  margin: -2px 0 0 -2px;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  cursor: pointer;
  vertical-align: top;
  position: relative;
  z-index: 1;
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