import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

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
  border-radius: ${props => props.isLowDay ? '13px' : ''};
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

const Low = styled(Day) `
  border-radius: 13px;
  background-color: #f2b203;
  background-clip: content-box;
`;

const CheckInLow = styled(CheckIn) `
  background-color: #f2b203;
  background-clip: content-box;
`;

const CheckOutLow = styled(CheckOut) `
  background-color: #f2b203;
  background-clip: content-box;
`;

const StayLow = styled(Stay) `
  background-color: #f2b203;
  background-clip: content-box;
`;

var CalendarDay = ({day, lowDays, setCheckInDate, checkInPicker, checkOutPicker, setCheckOutDate, checkInDate, checkOutDate}) => {
  let isCheckIn = false;
  let isCheckOut = false;
  let isLowDay = false;
  let isStay = false;
  let isBeforeCheckIn = false;
  let isAfterCheckOut = false;

  if (lowDays && day) {
    for (var i = 0; i < lowDays.length; i++) {
      if (lowDays[i].getDate() === day.getDate() && lowDays[i].getMonth() === day.getMonth() && lowDays[i].getFullYear() === day.getFullYear()) {
        isLowDay = true;
        break;
      }
    }
  }
  if (day) {
    if (checkInDate) {
      if (checkInDate.getDate() === day.getDate() && checkInDate.getMonth() === day.getMonth() && checkInDate.getFullYear() === day.getFullYear()) {
        isCheckIn = true;
      }
    }
    if (checkOutDate) {
      if (checkOutDate.getDate() === day.getDate() && checkOutDate.getMonth() === day.getMonth() && checkOutDate.getFullYear() === day.getFullYear()) {
        isCheckOut = true;
      }
    }
    if (checkInDate && checkOutDate) {
      if (day.getDate() > checkInDate.getDate() && day.getDate() < checkOutDate.getDate()) {
        if (day.getMonth() >= checkInDate.getMonth() && day.getMonth() <= checkOutDate.getMonth()) {
          if (day.getFullYear() >= checkInDate.getFullYear() && day.getFullYear() <= checkOutDate.getFullYear()) {
            isStay = true;
          }
        }
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

    // if (checkOutDate) {
    //   if (day.getDate() >= checkOutDate.getDate()) {
    //     if (day.getMonth() >= checkOutDate.getMonth()) {
    //       if (day.getFullYear() >= checkOutDate.getFullYear()) {
    //         isAfterCheckOut = true;
    //       }
    //     }
    //   }
    // }

  }





  if (checkInPicker) {
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
        <CheckIn isLowDay={isLowDay} onClick={(event) => setCheckInDate(day)}>{day.getDate()}</CheckIn>
      );
    } else if (isCheckOut) {
      return (
        <CheckOut isLowDay={isLowDay} onClick={(event) => setCheckInDate(day)}>{day.getDate()}</CheckOut>
      );
    } else if (isStay) {
      return (
        <Stay isLowDay={isLowDay} onClick={(event) => setCheckInDate(day)}>{day.getDate()}</Stay>
      );
    } else {
      return(
        <Day isLowDay={isLowDay} onClick={(event) => setCheckInDate(day)}>{day.getDate()}</Day>
      )
    }
  } else {
    if (!day) {
      return (
        <Day />
      )
    } else if (isLowDay && isBeforeCheckIn) {
      return(
        <Low > </Low>
      );
    } else if (isBeforeCheckIn) {
      return (
        <Day ></Day>
      );
    } else if (isLowDay && isCheckIn) {
      return(
        <CheckInLow onClick={(event) => setCheckOutDate(day)}>{day.getDate()}</CheckInLow>
      )
    } else if (isLowDay && isCheckOut) {
      return (
        <CheckOutLow onClick={(event) => setCheckOutDate(day)}>{day.getDate()}</CheckOutLow>
      );
    } else if (isLowDay && isStay) {
      return (
        <StayLow onClick={(event) => setCheckOutDate(day)}>{day.getDate()}</StayLow>
      );
    } else if (isLowDay) {
      return (
        <Low onClick={(event) => setCheckOutDate(day)}>{day.getDate()}</Low>
      );
    } else if (isCheckIn) {
      return (
        <CheckIn onClick={(event) => setCheckOutDate(day)}>{day.getDate()}</CheckIn>
      );
    } else if (isCheckOut) {
      return (
        <CheckOut onClick={(event) => setCheckOutDate(day)}>{day.getDate()}</CheckOut>
      );
    } else if (isStay) {
      return (
        <StayLow onClick={(event) => setCheckOutDate(day)}>{day.getDate()}</StayLow>
      );
    } else {
      return(
        <Day onClick={(event) => setCheckOutDate(day)}>{day.getDate()}</Day>
      )
    }
  }
}

export default CalendarDay;