import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CalendarWeek from './CalendarWeek.jsx';
import DaysOfTheWeek from './DaysOfTheWeek.jsx';

import Calendar from '../helpers/calendar.js';

const Month = styled.div`
  border-color: #e0e0e0;
  border-width: 0 0 0 2px;
  border-style: solid;
  padding: 0 16px;
  margin: 12px 10px 12px -15px;
  display: inline-block;
  width: 250px;
`;

const NoBorderMonth = styled(Month)`
  border-width: 0 0 0 0;
`;

const MonthHeading = styled.div `
    position: relative;
    box-sizing: border-box;
    width: 100%;
    top: 0;
    padding: 5px 7px;
`;

var CalendarMonth = ({month, year, setCheckInDate, setCheckOutDate, month1, lowDays, checkInPicker, checkOutPicker, checkOutDate, checkInDate}) => {
  let cal = new Calendar();
  let weeks = cal.daysInWeeks(month, year);
  let first = cal.firstDay(month,year);
if (!month1) {
    return (
      <Month>
        <MonthHeading>
        {`${cal.monthName(month)} ${year}`}
        </MonthHeading>
        <DaysOfTheWeek />
        { weeks.map((week, index) => <CalendarWeek weeks={weeks} start={(index === 0) ? first : 0} week={index} key={index}  month={month} year={year} lowDays={lowDays} setCheckInDate={setCheckInDate} setCheckOutDate={setCheckOutDate}  setCheckOutDate={setCheckOutDate} checkInPicker={checkInPicker} checkOutPicker={checkOutPicker} checkInDate={checkInDate} checkOutDate={checkOutDate}/>)}
      </Month>
    );
 } else {
  return (
    <NoBorderMonth>
      <MonthHeading>
      {`${cal.monthName(month)} ${year}`}
      </MonthHeading>
      <DaysOfTheWeek />
      { weeks.map((week, index) => <CalendarWeek weeks={weeks} start={(index === 0) ? first : 0} week={index} key={index}  month={month} year={year} lowDays={lowDays} setCheckInDate={setCheckInDate} setCheckOutDate={setCheckOutDate} checkInPicker={checkInPicker} checkOutPicker={checkOutPicker} checkInDate={checkInDate} checkOutDate={checkOutDate}/> )}
    </NoBorderMonth>
  );
 }
}

export default CalendarMonth;

{/* <Month>
<thead>
  <tr><td>{`${cal.monthName(month)} ${year}`}</td></tr>
  <DaysOfTheWeek />
</thead>
<tbody>
  { weeks.map((week, index) => <CalendarWeek weeks={weeks} start={(index === 0) ? first : 0} week={index} key={index} setCheckIn={setCheckIn} month={month} year={year}/> )}
</tbody>
</Month>
);
} else {
return (
<NoBorderMonth>
<thead>
<tr><td>{`${cal.monthName(month)} ${year}`}</td></tr>
  <DaysOfTheWeek />
</thead>
<tbody>
  { weeks.map((week, index) => <CalendarWeek weeks={weeks} start={(index === 0) ? first : 0} week={index} key={index} setCheckIn={setCheckIn} month={month} year={year}/> )}
</tbody>
</NoBorderMonth>
)
} */}