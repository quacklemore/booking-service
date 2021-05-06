import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import CalendarHelper from '../helpers/calendar.js';

const Day = styled.div`
  font-weight: 700;
  flex: 1 0;
  display: inline-block;
  border: 2px solid rgba(0,0,0,0);
  margin: -2px 0 0 -2px;
  padding: 6px;
  height: 30px;
  width: 30px;
  line-height: 30px;
  font-size: 14px;
  cursor: pointer;
  vertical-align: top;
  position: relative;
  z-index: 1;

  background-color: ${props => props.isLowDay ? '#f2b203' : ''};
  background-clip: ${props => props.isLowDay ? 'content-box' : ''};
`;

const CheckIn = styled(Day) `
  border-color: #00aa6c;
  border-radius: 2px 0 0 2px;
  z-index: 2;
`;

const CheckOut = styled(Day) `
  border-color: #c00;
  border-radius: 0 2px 2px 0;
`;

const Stay = styled(Day) `
  border-color: #8c8c8c;
`;

var CalendarDay = ({day, lowDays, setCheckInDate, checkInPicker, checkOutPicker, setCheckOutDate, checkInDate, checkOutDate}) => {
  let isCheckIn = false;
  let isCheckOut = false;
  let isLowDay = false;
  let isStay = false;
  let isBeforeCheckIn = false;
  let isAfterCheckOut = false;
  let cal = new CalendarHelper();


  if (day) {
    if (lowDays) {
      for (var i = 0; i < lowDays.length; i++) {
        if (cal.areTheSameDates(lowDays[i], day)) {
          isLowDay = true;
          break;
        }
      }
    }
    if (checkInDate) {
      if (cal.areTheSameDates(checkInDate, day)) {
        isCheckIn = true;
      }
    }
    if (checkOutDate) {
      if (cal.areTheSameDates(checkOutDate, day)) {
        isCheckOut = true;
      }
    }
    if (checkInDate && checkOutDate) {
      if (cal.isBetweenDates(day, checkInDate, checkOutDate)) {
        isStay = true;
      }
    }
    if (checkInDate) {
      if (day.getDate() < checkInDate.getDate()) {
        if (day.getMonth() < checkInDate.getMonth()) {
          if (day.getFullYear() < checkInDate.getFullYear()) {
            isBeforeCheckIn = true;
          }
        }
      }
    }
  }


  if (!day) {
    return (
      <Day />
    )
  } else if (isBeforeCheckIn) {
    return (
      <Day isLowDay={isLowDay}></Day>
    );
  } else if (isCheckIn) {
    return (
      checkInPicker ? <CheckIn isLowDay={isLowDay} onClick={(event) => setCheckInDate(day)}>{day.getDate()}</CheckIn> : <CheckIn isLowDay={isLowDay} onClick={(event) => setCheckOutDate(day)}>{day.getDate()}</CheckIn>
    );
  } else if (isCheckOut) {
    return (
      checkInPicker ? <CheckOut isLowDay={isLowDay} onClick={(event) => setCheckInDate(day)}>{day.getDate()}</CheckOut> : <CheckOut isLowDay={isLowDay} onClick={(event) => setCheckOutDate(day)}>{day.getDate()}</CheckOut>
    );
  } else if (isStay) {
    return (
      checkInPicker ? <Stay isLowDay={isLowDay} onClick={(event) => setCheckInDate(day)}>{day.getDate()}</Stay> : <Stay isLowDay={isLowDay} onClick={(event) => setCheckOutDate(day)}>{day.getDate()}</Stay>
    );
  } else {
    return(
      checkInPicker ? <Day isLowDay={isLowDay} onClick={(event) => setCheckInDate(day)}>{day.getDate()}</Day> : <Day isLowDay={isLowDay} onClick={(event) => setCheckOutDate(day)}>{day.getDate()}</Day>
    )
  }
}

export default CalendarDay;
