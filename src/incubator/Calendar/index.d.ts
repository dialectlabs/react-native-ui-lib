import { PropsWithChildren } from 'react';
import { CalendarProps } from './types';
declare function Calendar(props: PropsWithChildren<CalendarProps>): JSX.Element;
declare namespace Calendar {
    var Agenda: typeof import("./Agenda").default;
}
export default Calendar;
