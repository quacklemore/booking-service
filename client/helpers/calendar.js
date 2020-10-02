class CalendarHelper {
  constructor() {


  }

  getDay(day) {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[day];
  }


  daysInWeeks(month, year) {
    let first = this.firstDay(month, year);
    let days = this.daysInMonth(month, year);

    let weeks = [];

    //length of first week
    let firstWeek = 7 - first;
    weeks.push(firstWeek);

    days = days - firstWeek;

    //length of last week in month
    let lastWeek = days % 7;

    days = days - lastWeek;

    //number of full weeks in the month
    let fullWeeks = days / 7;

    for (var i = 0; i < fullWeeks; i++) {
      weeks.push(7);
    }
    if (lastWeek > 0) {
      weeks.push(lastWeek);
    }
    return weeks;
  }

  firstDay(month, year) {
    let firstDay = (new Date(year, month)).getDay();
    return firstDay;
  }

  leapYear(year) {
    if (year % 4 === 0) {
      return true;
    }
    return false;
  }

  monthName(month) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
  }

  daysInMonth(month, year) {
    var months = [];
    months[0] = 31;
    months[1] = (this.leapYear(year)) ? 29 : 28;
    months[2] = 31;
    months[3] = 30;
    months[4] = 31;
    months[5] = 30;
    months[6] = 31;
    months[7] = 31;
    months[8] = 30;
    months[9] = 31;
    months[10] = 30;
    months[11] = 31;

    return months[month];
  }
}

module.exports = CalendarHelper;
