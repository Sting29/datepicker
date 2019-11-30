import React, {useContext} from 'react';
import {CalendarTable} from '../CalendarTable/CalendarTable';
import {CalendarDropdown} from '../CalendarDropdown/CalendarDropdown';
import {CalendarContext} from '../../context/calendar/calendarContext';
import './Calendar.css';

export const Calendar = () => {
    const {calendarData, nextMonth, prevMonth, selectDate} = useContext(CalendarContext);
    const {nextButtonDisabled, prevButtonDisabled, calendarArray} = calendarData;
    
    return (
        <div className="calendar">
            <div className="calendar-month">
                <button 
                    className="calendar-month_back"
                    onClick={prevMonth}
                    disabled={prevButtonDisabled}>
                        back
                </button>
                <CalendarDropdown />
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