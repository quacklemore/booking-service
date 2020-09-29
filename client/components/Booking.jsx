import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import {DatesButton, DatesSpan} from '../Styles.jsx'
import Calendar from '../helpers/calendar.js';



let Booking = ({setShowCalendars, showCalendars, checkIn}) => {
  if (!checkIn) {
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
  } else {
    let day = Calendar.prototype.getDay(checkIn.getDay())
    let checkInDisplay = `${day}, ${checkIn.getMonth()}/${checkIn.getDate()}/${checkIn.getFullYear()}`;
    return (
      <div>
        <DatesButton onClick={event => setShowCalendars(!showCalendars)}>
          <DatesSpan>
            <span>Check In</span>
            <span>{checkInDisplay}</span>
          </DatesSpan>
        </DatesButton>
        <DatesButton onClick={event => setShowCalendars(!showCalendars)}>
          <DatesSpan>
            <span>Check Out</span>
            <span>- / - / -</span>
          </DatesSpan>
        </DatesButton>
      </div>
    )
  }
}

export default Booking;
