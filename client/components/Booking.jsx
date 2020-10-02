import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import Calendar from '../helpers/calendar.js';

import CalendarTodaySharpIcon from '@material-ui/icons/CalendarTodaySharp';

const DatesButton = styled.button `
  flex: 1 1 0%;
  display: inline-block;
  height: 100%;
  margin: 0 0 0 8px;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  text-decoration: none;
  background: #fff;
  padding: 0;
  text-align: center;
  font-size: inherit;
  font-family: inherit;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);


`;


const DatePicker = styled.div `
  height: 100%;
  background: #fff;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  white-space: nowrap;
  position: relative;
  margin: 0;
  padding: 0;
  width: 166px;
`;
const CheckInPicker = styled(DatePicker) `
    margin-left: 8px;
    border-left-width: 0;
    box-shadow: -8px 0 0 #00aa6c;
`;

const CheckOutPicker = styled(DatePicker) `
    margin-left: 8px;
    border-left-width: 0;
    box-shadow: -8px 0 0 #c00;
`;

const CalendarIcon = styled.span `
  display: inline-block;
  margin: 0 2px 0 8px;
  font-size: 1.25em;
  color: #8c8c8c;
  vertical-align: middle;
`;

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

let Booking = ({setShowCalendars, showCalendars, checkIn}) => {


  if (!checkIn) {
    return (
      <div>
        <DatesButton onClick={event => setShowCalendars(!showCalendars)}>
          <CheckInPicker>
            <CalendarIcon>
              <CalendarTodaySharpIcon/>
            </CalendarIcon>
            <CheckInOutLabel>Check In</CheckInOutLabel>
            <CheckInOutDate>- / - / -</CheckInOutDate>
          </CheckInPicker>
        </DatesButton>
        <DatesButton onClick={event => setShowCalendars(!showCalendars)}>
        <CheckOutPicker>
        <CalendarIcon>
          <CalendarTodaySharpIcon/>
        </CalendarIcon>
        <CheckInOutLabel>Check Out</CheckInOutLabel>
        <CheckInOutDate>- / - / -</CheckInOutDate>
        </CheckOutPicker>
        </DatesButton>
      </div>
    );
  }
}

export default Booking;

// else {
//   let day = Calendar.prototype.getDay(checkIn.getDay())
//   let checkInDisplay = `${day}, ${checkIn.getMonth()}/${checkIn.getDate()}/${checkIn.getFullYear()}`;
//   return (
//     <div>
//       <DatesButton onClick={event => setShowCalendars(!showCalendars)}>
//         <DatesSpan>
//           <span>Check In</span>
//           <span>{checkInDisplay}</span>
//         </DatesSpan>
//       </DatesButton>
//       <DatesButton onClick={event => setShowCalendars(!showCalendars)}>
//         <DatesSpan>
//           <span>Check Out</span>
//           <span>- / - / -</span>
//         </DatesSpan>
//       </DatesButton>
//     </div>
//   )
// }