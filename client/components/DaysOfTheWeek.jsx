import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledDaysOfTheWeek = styled.div`
  display: inline-block;
`;


const Day = styled.div `
  flex: 1 0;
  display: inline-block;
  border: 1px solid rgba(0,0,0,0);
  margin: -1px 10px 0px 5px;
  height: 36px;
  line-height: 36px;
  font-size: 11px;
  cursor: pointer;
  vertical-align: top;
  position: relative;
  z-index: 1;
`;

const Weekend = styled(Day) `
  font-weight: 700;
`;

var DaysOfTheWeek = () => {
  return (
    <StyledDaysOfTheWeek>
      <Weekend>Sun</Weekend>
      <Day>Mon</Day>
      <Day>Tue</Day>
      <Day>Wed</Day>
      <Day>Thu</Day>
      <Day>Fri</Day>
      <Weekend>Sat</Weekend>
    </StyledDaysOfTheWeek>
  );
}

export default DaysOfTheWeek;