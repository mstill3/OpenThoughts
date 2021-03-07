export const sameDay = (date1: Date, date2: Date) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDay() === date2.getDay();

export const betweenDays = (date: Date, fromDate: Date, toDate: Date) =>
  date >= fromDate && date <= toDate;
