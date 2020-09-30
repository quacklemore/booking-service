const Calendar = require('../client/helpers/calendar.js');

describe('calendar helper', () => {

  test('sanity check', ()=> {
    expect(true).toEqual(true);
  });

  test('it should get the abbreviated day', ()=> {
    let dayNum = 0;
    let dayAbbr = Calendar.prototype.getDay(0);
    expect(dayAbbr).toEqual('Sun');
  });

  test('it should give the name of a month', () => {
    let monthNum = 0;
    let monthName = Calendar.prototype.monthName(monthNum);
    expect(monthName).toBe('January')
  })

  test('it should get the days in each week of a month', ()=> {
    let september = Calendar.prototype.daysInWeeks(8, 2020);
    expect(september[0]).toEqual(5);
    expect(september[1]).toEqual(7);
    expect(september[2]).toEqual(7);
    expect(september[3]).toEqual(7);
    expect(september[4]).toEqual(4);
  });
})