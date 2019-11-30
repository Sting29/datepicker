import React, {useContext} from 'react';
import {CalendarContext} from '../../context/calendar/calendarContext';

import './CalendarDropdown.css';

export const CalendarDropdown = () => {
    const {calendarData} = useContext(CalendarContext);
    const {monthNameSelected, yearSelected, dropdownList} = calendarData;

    const listItem = dropdownList.map((item) => {
        const { monthNumber, monthName, yearList } = item;

        return (
            <li key={monthName}>
                <button 
                    className="calendar-dropdown_list__item"
                    type="button" 
                    onClick={() => console.log( monthNumber, monthName, yearList)}>
                        {monthName} {yearList}
                </button>
            </li>
        );
      });


    return (
        <div className="calendar-dropdown">
            <button 
                className="calendar-dropdown_button"
                onClick={() => console.log('drop click')}>
                    {yearSelected} {monthNameSelected}
            </button>
            <ul className="calendar-dropdown_list">
                {listItem}
            </ul>
        </div>
        
    )
}