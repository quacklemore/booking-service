import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import axios from 'axios';
import moment from 'moment';

import Calendar from './Calendar.jsx';
import Booking from './Booking.jsx';





// const Calendars = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   position: relative;
//   box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
// `;


const StyledBookingApp = styled.div`
  margin: 8px 0;
  height: 44px;
`;


const BookingApp = () => {
  const [trips, setTrips] = useState([]);
  const [month1, setMonth1] = useState((new Date()).getMonth());
  const [month2, setMonth2] = useState(month1 + 1);
  const [year, setYear] = useState((new Date()).getFullYear())
  const [showCalendars, setShowCalendars] = useState(false);
  const [checkIn, setCheckIn] = useState();

  useEffect(() => {
    axios({
      url: '/api/trips/0',
      method: 'get',
    })
    .then((result) => {
      setTrips(result.data)
    })
  },[]);



  if (!showCalendars) {
    return (
      <StyledBookingApp>
        <Booking setShowCalendars={setShowCalendars} showCalendars={showCalendars} checkIn={checkIn}/>
      </StyledBookingApp>
    );
  } else {
    return (
      <StyledBookingApp>
        <Booking setShowCalendars={setShowCalendars} showCalendars={showCalendars} checkIn={checkIn}/>
        <Calendar />
      </StyledBookingApp>
    );
  }
}



export default BookingApp;

