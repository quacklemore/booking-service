import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Day = styled.td`
  height: 100px;
  width:100px;
  border-color: black;
  border-width: 3px;
  border-style: solid;
`;

var CalendarDay = ({day}) => {
  return(
    <Day>{day}</Day>
  )
}

export default CalendarDay;