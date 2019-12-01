import React, {useContext} from 'react';
import {CalendarTable} from '../CalendarTable/CalendarTable';
import {CalendarDropdown} from '../CalendarDropdown/CalendarDropdown';
import {CalendarContext} from '../../context/calendar/calendarContext';
import './Calendar.css';

export const Calendar = () => {
    const {calendarData, nextMonth, prevMonth} = useContext(CalendarContext);
    const {nextButtonDisabled, prevButtonDisabled} = calendarData;
    
    return (
        <div className="calendar">
            <div className="calendar-month">
                <button 
                    className="calendar-month_button calendar-month_button__back"
                    onClick={prevMonth}
                    disabled={prevButtonDisabled}>  
                </button>
                <CalendarDropdown />
                <button 
                    className="calendar-month_button calendar-month_button__next"
                    onClick={nextMonth}
                    disabled={nextButtonDisabled}>
                </button>
            </div>
            <div className="calendar-dates" >
                <CalendarTable />
            </div>
        </div>
    )
}