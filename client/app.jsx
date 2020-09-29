import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import moment from 'moment';

import CalendarMonth from './components/CalendarMonth.jsx';

import Calendar from './helpers/calendar.js';



const BookingApp = () => {
  const [trips, setTrips] = useState([]);
  const [month1, setMonth1] = useState((new Date()).getMonth());
  const [month2, setMonth2] = useState(month1 + 1);
  const [year, setYear] = useState((new Date()).getFullYear())

  useEffect(() => {
    axios({
      url: '/api/trips/0',
      method: 'get',
    })
    .then((result) => {
      setTrips(result.data)
    })
  },[])

  return (
    <div>
      <CalendarMonth month={month1} year={year}/>
      <CalendarMonth month={month2} year={year}/>
    </div>
  );

}

ReactDOM.render(<BookingApp />, document.getElementById('booking-app'));