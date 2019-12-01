import React, {useContext} from 'react';
import {CalendarContext} from '../../context/calendar/calendarContext';

import './CalendarTable.css';

export const CalendarTable = () => {

    const {calendarData, selectDate} = useContext(CalendarContext);
    const {calendarArray, weekDayNames} = calendarData;

    const dayNames = weekDayNames.map(item => {
        return (
            <span key={item} className="calendar-table_week-day">{item}</span>
        )
    })
    
    const days = calendarArray.map(item => {
        const { id, dayNumber, celectable, celectedDay, empty } = item;

        return (
            <button 
                className={`calendar-table_day ${celectedDay ? 'day-selected' : ''} ${empty ? 'empty' : ''}`}
                type="button" 
                key={id} 
                disabled={!celectable}
                onClick={() => selectDate(dayNumber)}>
                    {dayNumber}    
            </button>
        );
      });
    
    return (
        <div className="calendar-table">
            <div className="calendar-table_week-days">
                {dayNames}
            </div>
            <div className="calendar-table_week-days">
                {days}
            </div>
        </div>
    )
}