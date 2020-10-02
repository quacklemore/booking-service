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
  const [today, setToday] = useState(new Date())
  const [month1, setMonth1] = useState();
  const [month2, setMonth2] = useState();
  const [year, setYear] = useState()
  const [year2, setYear2] = useState()
  const [showCalendars, setShowCalendars] = useState(true);
  const [checkIn, setCheckIn] = useState();

  useEffect(() => {
    setYear(today.getFullYear());
    setMonth1(today.getMonth());

    setYear2(today.getFullYear())
    // axios({
    //   url: '/api/trips/0',
    //   method: 'get',
    // })
    // .then((result) => {
    //   setTrips(result.data)
    // })
  },[]);

  useEffect(() => {
    if (month1 < 0) {
      setMonth1(11);
      setYear(year - 1);
    } else if ((month1 / 12) >= 1) {
      setMonth1(month1 % 12);
      setYear(year + 1);
    }
    if (((month1 + 1) / 12) >= 1) {
      setYear2 (year + 1);
    }
    setMonth2((month1 + 1) % 12)
  }), [month1];

  useEffect

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
        <Calendar year={year} year2={year2} month1={month1} month2={month2} setMonth1={setMonth1}/>
      </StyledBookingApp>
    );
  }
}



export default BookingApp;

