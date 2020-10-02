import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import Calendar from '../helpers/calendar.js';

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

  if (isCheckInDate) {
    return (
      <span>
        <CheckInOutLabel>Check In</CheckInOutLabel>
        <CheckInOutDate>- / - / -</CheckInOutDate>
      </span>
    );
  } else {
    return (
      <span>
        <CheckInOutLabel>Check Out</CheckInOutLabel>
        <CheckInOutDate>- / - / -</CheckInOutDate>
      </span>
    );
  }

}

export default BookingDate;