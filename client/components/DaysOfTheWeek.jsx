import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledDaysOfTheWeek = styled.div`
  display: grid;
  grid-template-areas: 'sunday monday tuesday wednesday thursday friday saturday';
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;


var DaysOfTheWeek = () => {
  return (
    <StyledDaysOfTheWeek>
      <div>Sunday</div>
      <div>Monday</div>
      <div>Tuesday</div>
      <div>Wednesday</div>
      <div>Thursday</div>
      <div>Friday</div>
      <div>Saturday</div>
    </StyledDaysOfTheWeek>
  );
}

export default DaysOfTheWeek;