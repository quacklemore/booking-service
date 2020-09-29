import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import {DatesButton, DatesSpan} from '../Styles.jsx'




let Booking = ({setShowCalendars, showCalendars}) => {
  return (
    <div>
      <DatesButton onClick={event => setShowCalendars(!showCalendars)}>
        <DatesSpan>
          <span>Check In</span>
          <span>- / - / -</span>
        </DatesSpan>
      </DatesButton>
      <DatesButton onClick={event => setShowCalendars(!showCalendars)}>
        <DatesSpan>
          <span>Check Out</span>
          <span>- / - / -</span>
        </DatesSpan>
      </DatesButton>
    </div>
  );
}

export default Booking;
