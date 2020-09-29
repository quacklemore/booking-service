import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledDaysOfTheWeek = styled.tr`
  display: grid;
  grid-template-areas: 'sunday monday tuesday wednesday thursday friday saturday';
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;


var DaysOfTheWeek = () => {
  return (
    <StyledDaysOfTheWeek>
      <td>Sunday</td>
      <td>Monday</td>
      <td>Tuesday</td>
      <td>Wednesday</td>
      <td>Thursday</td>
      <td>Friday</td>
      <td>Saturday</td>
    </StyledDaysOfTheWeek>
  );
}

export default DaysOfTheWeek;