import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import CalendarMonth from './components/CalendarMonth.jsx';

import axios from 'axios';



const BookingApp = () => {
  const [hello, setHello] = useState(true);
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    axios({
      url: '/api/trips/0',
      method: 'get',
    })
    .then((result) => {
      setTrips(result.data)
    })
  },[])

  if (hello){
  return (
    <div>
    <h1 onClick={() => setHello(false)}>Hello</h1>
    <CalendarMonth />
    </div>

  );
  } else {
    return (
      <h1 onClick={() => setHello(true)}>Goodbye</h1>
    )
  }
}

ReactDOM.render(<BookingApp />, document.getElementById('booking-app'));