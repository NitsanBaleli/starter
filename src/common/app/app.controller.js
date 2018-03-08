class AppController {
  constructor() {
    'ngInject';
    this.initialState = {
      start: {
        start: '',
        return: '',
      },

      return: {
        start: '',
        return: '',
      },
    };
    this.state = angular.copy(this.initialState);
    this.calendarOpen = true;
    this.days = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, ];
  }

  chooseDay(cal, day) {
    if (this.state[cal].start && this.state[cal].return) {
      this.state[cal] = angular.copy(this.initialState);
    }
    if (!this.state[cal].start) {
      this.state[cal].start = day;
    } else if (!this.state[cal].return) {
      if (day <= this.state[cal].start) return;
      this.state[cal].return = day;
    }
  }
  toggleCalendar() {
    this.calendarOpen = !this.calendarOpen;
  }
  isStartDay(cal, day) {
    return this.state[cal].start == day;
  }
  isReturnDate(cal, day) {
    return this.state[cal].return == day;
  }

  isBetweenDates(cal, day) {
    return day >= this.state[cal].start && day <= this.state[cal].return;
  }

  apply() {}
}
export default AppController;
