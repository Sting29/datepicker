import React, {useContext} from 'react';
import {CalendarTable} from '../CalendarTable/CalendarTable';
import './Calendar.css';
import { CalendarContext } from '../../context/calendarContext';

export const Calendar = () => {
    const {calendarData} = useContext(CalendarContext);

    console.log(calendarData);
    

    return (
        <div className="calendar">
            <div className="calendar-month">
                <button className="calendar-month_back">back</button>
                <p className="calendar-month_select">{calendarData.yearNow} {calendarData.monthNow}</p>
                <button className="calendar-month_next">next</button>
            </div>
            <div className="calendar-dates">
                <CalendarTable tableData={calendarData.calendarArray} />
            </div>
        </div>
    )
}