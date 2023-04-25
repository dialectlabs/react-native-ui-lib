import _times from "lodash/times";
import getWeek from 'date-fns/getWeek';
export const HOUR_IN_MS = 60 * 60 * 1000;
const DAY_IN_MS = 24 * HOUR_IN_MS;
const WEEK_IN_MS = 7 * DAY_IN_MS;
export function getWeekNumbersOfMonth(year, month, firstDayOfWeek) {
  if (month < 0 || month > 11) {
    throw new Error('getWeekNumbersOfMonth util received an invalid month');
  }
  const firstDayOfMonth = new Date(year, month, 1);
  const firstWeekNumber = getWeek(firstDayOfMonth, {
    weekStartsOn: firstDayOfWeek
  });
  const numberOfWeeks = getNumberOfWeeksInMonth(year, month, firstDayOfWeek);
  const weekNumbers = [];
  _times(numberOfWeeks, i => weekNumbers.push(i + firstWeekNumber));
  return weekNumbers;
}
export function getNumberOfWeeksInMonth(year, month, firstDayOfWeek) {
  const numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();
  const dayOfTheWeek = new Date(year, month, 1).getDay();
  // Modify day in the week based on the first day of the week
  const fixedDayOfTheWeek = (7 - (firstDayOfWeek - dayOfTheWeek)) % 7;
  const numberOfWeeks = Math.ceil((numberOfDaysInMonth + fixedDayOfTheWeek) / 7);
  return numberOfWeeks;
}
function getFirstDayInTheWeek(date, firstDayOfWeek) {
  const dayOfTheWeek = new Date(date).getDay();
  let result = date - DAY_IN_MS * ((dayOfTheWeek - firstDayOfWeek) % 7);
  const dayInMonth = getDateObject(result).day;
  if (dayInMonth > 1 && dayInMonth <= 7) {
    result -= WEEK_IN_MS;
  }
  return result;
}
function getFirstDayInTheYear(year, firstDayOfWeek) {
  const dayInFirstWeekOfYear = new Date(year, 0, 1);
  return getFirstDayInTheWeek(dayInFirstWeekOfYear.getTime(), firstDayOfWeek);
}

// TODO: Fix to use Default behavior for week number
export function getDaysOfWeekNumber(year, weekNumber, firstDayOfWeek) {
  const result = new Array(7).fill(null);
  const firstDayOfYear = getFirstDayInTheYear(year, firstDayOfWeek);
  const firstDayInRelevantWeek = firstDayOfYear + (weekNumber - 1) * WEEK_IN_MS;
  for (let day = 0; day <= 6; ++day) {
    result[day] = firstDayInRelevantWeek + DAY_IN_MS * day;
  }
  return result;
}
export function getDayOfDate(date) {
  return new Date(date).getDate();
}
export function getDayOfTheWeek(date) {
  return new Date(date).getDay();
}

/* Worklets */

export function getDateObject(date) {
  'worklet';

  const d = new Date(date);
  return {
    day: d.getDate(),
    month: d.getMonth(),
    year: d.getFullYear()
  };
}
export function getTimestamp(date) {
  'worklet';

  return new Date(date.year, date.month, date.day).getTime();
}
export function addMonths(date, count) {
  'worklet';

  if (count === 0) {
    return date;
  }
  const month = getDateObject(date).month;
  return new Date(date).setMonth(month + count);
}
export function addYears(date, count) {
  'worklet';

  if (count === 0) {
    return date;
  }
  const year = getDateObject(date).year;
  return new Date(date).setFullYear(year + count);
}
export function getMonthForIndex(index) {
  'worklet';

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  if (index >= 0 && index < 12) {
    return months[index];
  }
}
function getWeekDaysNames(format) {
  //TODO: localize
  switch (format) {
    case 1:
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    case 2:
      return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    default:
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }
}
export function getWeekDayNames(firstDayOfWeek = 0, format) {
  //TODO: consider 'options' param
  'worklet';

  let weekDaysNames = getWeekDaysNames(format);
  const dayShift = firstDayOfWeek % 7;
  if (dayShift) {
    weekDaysNames = weekDaysNames.slice(dayShift).concat(weekDaysNames.slice(0, dayShift));
  }
  return weekDaysNames;
}
export function isToday(date) {
  'worklet';

  return date !== null && date !== undefined ? isSameDay(Date.now(), date) : false;
}
export function isPastDate(date) {
  const today = new Date();
  const d = new Date(date);
  if (today.getFullYear() > d.getFullYear()) {
    return true;
  }
  if (today.getFullYear() === d.getFullYear()) {
    if (today.getMonth() > d.getMonth()) {
      return true;
    }
    if (today.getMonth() === d.getMonth()) {
      if (today.getDate() > d.getDate()) {
        return true;
      }
    }
  }
  return false;
}
export function isSameDay(d1, d2) {
  'worklet';

  const a = getDateObject(d1);
  const b = getDateObject(d2);
  if (a.year === b.year) {
    if (a.month === b.month) {
      if (a.day === b.day) {
        return true;
      }
    }
  }
  return false;
}
export function isSameMonth(d1, d2) {
  'worklet';

  const a = typeof d1 === 'number' ? getDateObject(d1) : d1;
  const b = typeof d2 === 'number' ? getDateObject(d2) : d2;
  if (a.year === b.year) {
    if (a.month === b.month) {
      return true;
    }
  }
  return false;
}
export const _forTesting = {
  getFirstDayInTheYear
}; // exporting private functions for testing only