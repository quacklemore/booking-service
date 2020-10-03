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

const Low = styled(Day) `
  border-radius: 6px;
  background-color: #f2b203;
  background-clip: content-box;
`;

var CalendarDay = ({day, lowDays, setCheckInDate, checkInPicker, checkOutPicker, setCheckOutDate}) => {
  let isLowDay = false;
  if (lowDays && day) {
    for (var i = 0; i < lowDays.length; i++) {
      if (lowDays[i].getDate() === day.getDate() && lowDays[i].getMonth() === day.getMonth() && lowDays[i].getFullYear() === day.getFullYear()) {
        isLowDay = true;
        break;
      }
    }
  }
  if (checkInPicker) {
    if (!day) {
      return (
        <Day />
      )
    } else if (isLowDay) {
      return(
        <Low onClick={(event) => setCheckInDate(day)}>{day.getDate()}</Low>
      )
    } else {
      return(
        <Day onClick={(event) => setCheckInDate(day)}>{day.getDate()}</Day>
      )
    }
  } else {
    if (!day) {
      return (
        <Day />
      )
    } else if (isLowDay) {
      return(
        <Low onClick={(event) => setCheckOutDate(day)}>{day.getDate()}</Low>
      )
    } else {
      return(
        <Day onClick={(event) => setCheckOutDate(day)}>{day.getDate()}</Day>
      )
    }
  }
}

export default CalendarDay;