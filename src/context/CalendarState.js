import React, {useReducer} from 'react'
import {CalendarContext} from './calendarContext';
import {calendarReducer} from './calendarReducer';

export const CalendarState = ({children}) => {
    const dateToday = new Date();
    const dayToday = dateToday.getDate();
    const monthNow = dateToday.getMonth();
    const yearNow = dateToday.getFullYear();
    const monthNameArr = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני",
     "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
    //const endDate = dateToday(new Date().setFullYear(new Date().getFullYear() + 1));

    const monthSelected = monthNow;
    const yearSelected = yearNow;
    const monthNameSelected = monthNameArr[monthSelected];


    const daysInMonthSelected = (monthSelected, yearSelected) => {
        switch(monthSelected) {
            case 3:
            case 5:
            case 8:
            case 10: {
                return 30;
            }
            case 1: {
                if (yearSelected % 4 !== 0) {
                    return 28;
                }
            return 29;
            }
            default: {
                return 31;
            }
        }
    }

    const buildCalendar = (daysInMonth, weekDayFirst, monthSelected, monthNow) => {
        let counter = 1
        let arr = [];
        console.log(daysInMonth, weekDayFirst, monthSelected, monthNow);
        for (let i = 0; i < 42; i++) {
            if (i >= weekDayFirst && i < weekDayFirst + daysInMonth) {
                arr.push({
                    id: `day-${i}`,
                    dayNumber: counter,
                    celectable: true,
                    celectedDay: false
                });
                counter++;
            } else {
                arr.push({
                    id: `day-${i}`,
                    dayNumber: '',
                    celectable: false,
                    celectedDay: false
                });
            }
        }
        if (monthNow === monthSelected) {
            for (let i = weekDayFirst; i < weekDayFirst + dayToday - 1; i++) {
                arr[i].celectable = false;
            }
        }
        return arr;
    }

    const createCalendarArray = (dateSelected = null) => {
        let dateTemp = new Date();
        dateTemp.setFullYear(yearSelected, monthSelected, 1);
        const weekDayFirst = dateTemp.getDay();
        const daysInMonth = daysInMonthSelected(monthSelected, yearSelected);

        return buildCalendar(daysInMonth, weekDayFirst, monthSelected, monthNow);
    }

    const calendarArray = createCalendarArray(monthSelected, yearSelected);



    const initialState = {
        monthNameArr: monthNameArr,
        monthNameSelected: monthNameSelected,
        yearSelected: yearSelected,
        calendarArray: calendarArray
    }

    const [state, dispatch] = useReducer(calendarReducer, initialState);

    return (
        <CalendarContext.Provider value={{
            calendarData: state
        }}>
            {children}
        </CalendarContext.Provider>
    )
}