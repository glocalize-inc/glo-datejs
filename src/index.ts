/** 요일 기준
 * 월화수목금토일 순
 */

/**
 *
 * @param date = new Date()
 * @returns default: 이번 주 일요일
 */
export function getSunday(date: Date = new Date()): Date {
  const sunday = new Date(date);
  sunday.setDate(date.getDate() + ((7 - date.getDay()) % 7));
  return sunday;
}

/**
 *
 * @param date = new Date()
 * @returns default: 이번 주 월요일
 */
export function getMonday(date: Date = new Date()): Date {
  const monday = new Date(date);
  monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
  return monday;
}

/**
 *
 * @param week // -1 then 1 week ago, -2 then 2 weeks ago...
 */
export function getMondayAndSunday(date: Date);
export function getMondayAndSunday(week: number);
export function getMondayAndSunday(p1: Date | number = 0): [Date, Date] {
  switch (p1.constructor.name) {
    case "Number":
      const date = new Date();
      // @ts-ignore
      date.setDate(date.getDate() + p1 * 7);
      return [getMonday(date), getSunday(date)];
    case "Date":
      return [getMonday(p1 as Date), getSunday(p1 as Date)];
  }
}

export function getLastDateOfMonth(date: Date = new Date()): Date {
  const lastDate = new Date(date);
  lastDate.setMonth(date.getMonth() + 1);
  lastDate.setDate(0);
  return lastDate;
}
