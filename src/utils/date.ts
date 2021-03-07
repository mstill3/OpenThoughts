import { DateTime } from 'luxon';

export const sameDay = (date1: Date, date2: Date) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDay() === date2.getDay();

export const betweenDays = (date: Date, fromDate: Date, toDate: Date) =>
  date >= fromDate && date <= toDate;

export const duringMonth = (monthDate: Date, date: Date) => {
  const dt = DateTime.fromJSDate(date);
  const monthDt = DateTime.fromJSDate(monthDate);
  const firstInMonth = DateTime.local(monthDt.year, monthDt.month, 1, 24, 0);
  const lastInMonth = DateTime.local(
    monthDt.year,
    monthDt.month,
    monthDt.daysInMonth,
    23,
    59,
  );
  return firstInMonth < dt && dt < lastInMonth;
};
