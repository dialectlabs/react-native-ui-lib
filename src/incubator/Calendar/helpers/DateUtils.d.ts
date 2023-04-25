import { FirstDayOfWeek, DayNamesFormat, DateObjectWithOptionalDay, DateObject } from '../types';
export declare const HOUR_IN_MS: number;
export declare function getWeekNumbersOfMonth(year: number, month: number, firstDayOfWeek: FirstDayOfWeek): number[];
export declare function getNumberOfWeeksInMonth(year: number, month: number, firstDayOfWeek: FirstDayOfWeek): number;
declare function getFirstDayInTheYear(year: number, firstDayOfWeek: FirstDayOfWeek): number;
export declare function getDaysOfWeekNumber(year: number, weekNumber: number, firstDayOfWeek: FirstDayOfWeek): any[];
export declare function getDayOfDate(date: number): number;
export declare function getDayOfTheWeek(date: number): number;
export declare function getDateObject(date: number): {
    day: number;
    month: number;
    year: number;
};
export declare function getTimestamp(date: DateObject): number;
export declare function addMonths(date: number, count: number): number;
export declare function addYears(date: number, count: number): number;
export declare function getMonthForIndex(index: number): string | undefined;
export declare function getWeekDayNames(firstDayOfWeek?: number, format?: DayNamesFormat): string[];
export declare function isToday(date: number | null): boolean;
export declare function isPastDate(date: number): boolean;
export declare function isSameDay(d1: number, d2: number): boolean;
export declare function isSameMonth(d1: number | DateObjectWithOptionalDay, d2: number | DateObjectWithOptionalDay): boolean;
export declare const _forTesting: {
    getFirstDayInTheYear: typeof getFirstDayInTheYear;
};
export {};
