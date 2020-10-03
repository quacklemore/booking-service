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

const BookingDate = ({isCheckInDate}) => {
  let date = new Date();
  if (isCheckInDate) {
    if (!date) {
      return (
        <span>
          <CheckInOutLabel>Check In</CheckInOutLabel>
          <CheckInOutDate>- / - / -</CheckInOutDate>
        </span>
      );
    } else {
      let checkInDay = CalendarHelper.prototype.getDay(date.getDay());
      let checkInDate = date.getDate();
      let checkInMonth = date.getMonth() + 1;
      let checkInYear = date.getFullYear().toString().slice(-2);
      return (
        <span>
          <CheckInOutLabel>Check In</CheckInOutLabel>
          <CheckInOutDate>{`${checkInDay}, ${checkInMonth}/${checkInDate}/${checkInYear}`}</CheckInOutDate>
        </span>
      );
    }
  } else {
    if (!date) {
      return (
        <span>
          <CheckInOutLabel>Check Out</CheckInOutLabel>
          <CheckInOutDate>- / - / -</CheckInOutDate>
        </span>
      );
    } else {
      let checkOutDay = CalendarHelper.prototype.getDay(date.getDay());
      let checkOutDate = date.getDate();
      let checkOutMonth = date.getMonth() + 1;
      let checkOutYear = date.getFullYear().toString().slice(-2);
      return (
        <span>
          <CheckInOutLabel>Check Out</CheckInOutLabel>
          <CheckInOutDate>{`${checkOutDay}, ${checkOutMonth}/${checkOutDate}/${checkOutYear}`}</CheckInOutDate>
        </span>
      );
    }
  }
}

export default BookingDate;
