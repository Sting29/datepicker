import React, {useState, useContext} from 'react';
import {CalendarContext} from '../../context/calendar/calendarContext';

import './CalendarDropdown.css';

export const CalendarDropdown = () => {
    const {calendarData, selectMonth} = useContext(CalendarContext);
    const {monthNameSelected, yearSelected, dropdownList} = calendarData;
    const [dropdownActive, setDropdownActive] = useState(false);

    const selectHandler = (selectMonthData) => {
        selectMonth(selectMonthData);
        setDropdownActive(false);
    }

    const listItem = dropdownList.map((item) => {
        const { monthName, yearList } = item;

        return (
            <li key={`${monthName}-${yearList}`}>
                <button 
                    className="calendar-dropdown_list__item"
                    type="button" 
                    onClick={() => selectHandler(item)}>
                        {monthName} {yearList}
                </button>
            </li>
        );
      });


    return (
        <div className="calendar-dropdown">
            <button 
                className="calendar-dropdown_button"
                onClick={() => setDropdownActive(!dropdownActive)}>
                    {yearSelected} {monthNameSelected}
            </button>
            <ul className={`calendar-dropdown_list ${dropdownActive ? 'active' : ''}`}>
                {listItem}
            </ul>
        </div>
        
    )
}