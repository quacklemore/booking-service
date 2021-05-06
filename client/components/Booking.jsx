import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'


import CalendarTodaySharpIcon from '@material-ui/icons/CalendarTodaySharp';

import BookingDate from './BookingDate.jsx';

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
  opacity: ${props => props.selected ? 1 : .3};
  &:hover {
    opacity: 1;
  }
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



let Booking = ({setCheckInPicker, setCheckOutPicker, checkInPicker, checkOutPicker, checkInDate, checkOutDate}) => {
  return (
    <div>
      <DatesButton onClick={event => setCheckInPicker(!checkInPicker)}>
        <CheckInPicker selected={checkInPicker || (!checkInPicker && !checkOutPicker)} >
          <CalendarIcon>
            <CalendarTodaySharpIcon/>
          </CalendarIcon>
          <BookingDate isCheckInDate={true} date={checkInDate}/>
        </CheckInPicker>
      </DatesButton>
      <DatesButton onClick={event => setCheckOutPicker(!checkOutPicker)}>
        <CheckOutPicker selected={checkOutPicker || (!checkInPicker && !checkOutPicker)}>
          <CalendarIcon>
            <CalendarTodaySharpIcon/>
          </CalendarIcon>
          <BookingDate isCheckInDate={false} date={checkOutDate}/>
        </CheckOutPicker>
      </DatesButton>
    </div>
  );
}

export default Booking;
