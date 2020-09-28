import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';



const BookingApp = () => {
  const [hello, setHello] = useState(true);
  const [trips, setTrips] = useState([]);
  //console.log(db)
  useEffect(() => {
    axios({
      url: '/api/trips',
      method: 'get',
      data: {id: 1}
    })
    /.then((result) => {
      console.log(result.data)
      setTrips(result.data);
    })
  })

  if (hello){
  return (
    <div>
    <h1 onClick={() => setHello(false)}>Hello</h1>
    <div>{trips}</div>
    </div>

  );
  } else {
    return (
      <h1 onClick={() => setHello(true)}>Goodbye</h1>
    )
  }
}

ReactDOM.render(<BookingApp />, document.getElementById('booking-app'));