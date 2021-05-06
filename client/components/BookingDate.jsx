import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import CalendarHelper from '../helpers/calendar.js';

const CheckInOutLabel = styled.span `
  display: block;
    margin-bottom: 2px;
    font-size: .75em;
    line-height: normal;
    color: #474747;

`;

const CheckInOutDate = styled.span `
  display: block;
  font-size: .8125em;
  font-weight: 700;
  line-height: 20px;
`;

const BookingDate = ({isCheckInDate, date}) => {
  if (date) {
    var dayOfTheWeek = CalendarHelper.prototype.getDay(date.getDay());
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear().toString().slice(-2);
  }
  return (
    <span>
      {isCheckInDate ? <CheckInOutLabel>Check In</CheckInOutLabel> : <CheckInOutLabel>Check Out</CheckInOutLabel>}
      {date ? <CheckInOutDate>{`${dayOfTheWeek}, ${month}/${day}/${year}`}</CheckInOutDate> : <CheckInOutDate>- / - / -</CheckInOutDate>}
    </span>
  );


}

export default BookingDate;
