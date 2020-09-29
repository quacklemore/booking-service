import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledDaysOfTheWeek = styled.tr`
  display: grid;
  grid-template-areas: 'sunday monday tuesday wednesday thursday friday saturday';
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const Day = styled.td`
  height: 36px;
  line-height: 36px;
  font-size: 11px;
`;

var DaysOfTheWeek = () => {
  return (
    <StyledDaysOfTheWeek>
      <Day>Sun</Day>
      <Day>Mon</Day>
      <Day>Tue</Day>
      <Day>Wed</Day>
      <Day>Thu</Day>
      <Day>Fri</Day>
      <Day>Sat</Day>
    </StyledDaysOfTheWeek>
  );
}

export default DaysOfTheWeek;