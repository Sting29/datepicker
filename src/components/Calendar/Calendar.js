import React, {useContext} from 'react';
import {CalendarTable} from '../CalendarTable/CalendarTable';
import { CalendarContext } from '../../context/calendar/calendarContext';
import './Calendar.css';

export const Calendar = () => {
    const {calendarData, nextMonth, prevMonth, selectDate} = useContext(CalendarContext);
    const {monthNameSelected, yearSelected, nextButtonDisabled, prevButtonDisabled, calendarArray} = calendarData;
    console.log('Calendar', calendarData, nextMonth, nextButtonDisabled);
    
    return (
        <div className="calendar">
            <div className="calendar-month">
                <button 
                    className="calendar-month_back"
                    onClick={prevMonth}
                    disabled={prevButtonDisabled}>
                        back
                </button>
                <p className="calendar-month_select">{yearSelected} {monthNameSelected}</p>
                <button 
                    className="calendar-month_next"
                    onClick={nextMonth}
                    disabled={nextButtonDisabled}>
                        next
                </button>
            </div>
            <div className="calendar-dates" >
                <CalendarTable calendarArray={calendarArray} selectDate={selectDate} />
            </div>
        </div>
    )
}