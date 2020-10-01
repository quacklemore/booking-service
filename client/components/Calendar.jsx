import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const StyledCalendarComponent = styled.div `
  position: absolute;
  top: 464px;
  left: 544px;
  bottom: auto;
  right: auto;
  z-index: 9991;
  transform: translateZ(0px);

`;

const CalendarBox = styled.div `
  display: flex;
  flex-direction: column;
  position: relative;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,.25));
  transform: translateZ(0);
  background-color: var(#fff);
  border-radius: 2px;
`;

const PickerPointer = styled.div `
  top: 72px;
  right: 100%;
  width: var(16.97056275px);
  height: calc(2*var(12px) + var(16.97056275px));
  position: absolute;
  overflow: hidden;

  transform: translateX(50%) translateY(-50%) rotate(45deg);
  right: 0;
  top: 50%;
`;

const StyledCalendar = styled.div `

`;

const TopBar = styled.div `
  text-align: center;
  padding: 15px 0 10px;
  font-size: 15px;
  border: solid #e0e0e0;
  border-width: 0 0 1px;
  font-weight: 700;
  margin: 0 15px;
  color: #000;
`;

const TopBarInset = styled.div `
  padding-top: 4px;
  font-weight: 400;
  font-size: 12px;
  color: #474747;
`;

const LowPrice = styled.span `
  background: #f2b203;
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 2px;
`;

const Calendar = () => {
  return (
    <StyledCalendarComponent>
      <CalendarBox>
        <div>
          <TopBar>
            Select a date to continue
            <TopBarInset>
              <LowPrice></LowPrice>
              Lowest Priced Dates
            </TopBarInset>

          </TopBar>
        </div>
        <PickerPointer></PickerPointer>
      </CalendarBox>
    </StyledCalendarComponent>
  );
}

export default Calendar;