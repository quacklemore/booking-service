import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CalendarDay from './CalendarDay.jsx';

const Week = styled.div`
  display: flex;
`;



var CalendarWeek = ({weeks, start, week, setCheckInDate, month, year, lowDays, setCheckOutDate, checkInPicker, checkOutPicker, checkInDate, checkOutDate}) => {
  let days = [];
  let count = 0;
  for ( var i = 0; i < week; i++) {
    count += weeks[i];
  }
  count++;
  for (var i = 0; i < 7; i++) {
    if ((start > 0 && i >= start) || (start === 0 && i < weeks[week])) {
      let day = new Date(year, month, count);
      days.push(day);
      count++;
    } else {
      days.push(undefined);
    }
  }

  return (
    <Week>
      {days.map((day, index) =>
        <CalendarDay
          day={day}
          lowDays={lowDays}
          key={index}
          setCheckInDate={setCheckInDate}
          setCheckOutDate={setCheckOutDate}
          checkInPicker={checkInPicker}
          checkOutPicker={checkOutPicker}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
        />
      )}
    </Week>
  )
}


export default CalendarWeek;