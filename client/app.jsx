import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import axios from 'axios';
import moment from 'moment';

import CalendarMonth from './components/CalendarMonth.jsx';
import Booking from './components/Booking.jsx';

import Calendar from './helpers/calendar.js';


const Calendars = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;

`;

const StyledBookingApp = styled.div`
  position: relative;
  height: 50%;
  width: 40%;
  font-family: 'Trip Sans', Arial, sans-serif !important;
`;


const BookingApp = () => {
  const [trips, setTrips] = useState([]);
  const [month1, setMonth1] = useState((new Date()).getMonth());
  const [month2, setMonth2] = useState(month1 + 1);
  const [year, setYear] = useState((new Date()).getFullYear())
  const [showCalendars, setShowCalendars] = useState(false);
  useEffect(() => {
    axios({
      url: '/api/trips/0',
      method: 'get',
    })
    .then((result) => {
      setTrips(result.data)
    })
  },[])

  if (!showCalendars) {
    return (
      <StyledBookingApp>
        <Booking setShowCalendars={setShowCalendars} showCalendars={showCalendars}/>
      </StyledBookingApp>
    );
  } else {
    return (
      <StyledBookingApp>
        <Booking setShowCalendars={setShowCalendars} showCalendars={showCalendars}/>
        <Calendars>
          <CalendarMonth month={month1} year={year}/>
          <CalendarMonth month={month2} year={year}/>
        </Calendars>
      </StyledBookingApp>
    );
  }

}

ReactDOM.render(<BookingApp />, document.getElementById('booking-app'));