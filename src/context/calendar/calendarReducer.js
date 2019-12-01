import {NEXT_MONTH, PREV_MONTH, SELECT_DATE, SELECT_MONTH} from '../types';
import {createCalendarArray} from '../../helpers/calendar';

export const calendarReducer = (state, action) => {
    switch (action.type) {
        case NEXT_MONTH: {
            const {monthSelected, monthNameArr, yearSelected, yearEnd, monthEnd, dateSelected} = state;
            const monthSelectedNew = monthSelected === 11 ? 0 : monthSelected + 1;
            const yearSelectedNew = monthSelected === 11 ? yearSelected + 1 : yearSelected;
            if (yearEnd === yearSelectedNew && monthEnd === monthSelected + 1) {
                return {
                    ...state,
                    monthSelected: monthSelectedNew,
                    yearSelected: yearSelectedNew,
                    monthNameSelected: monthNameArr[monthSelectedNew],
                    calendarArray: createCalendarArray(monthSelectedNew, yearSelectedNew, dateSelected),
                    prevButtonDisabled: false,
                    nextButtonDisabled: true
                };
            }
            return {
                ...state,
                monthSelected: monthSelectedNew,
                yearSelected: yearSelectedNew,
                monthNameSelected: monthNameArr[monthSelectedNew],
                calendarArray: createCalendarArray(monthSelectedNew, yearSelectedNew, dateSelected),
                prevButtonDisabled: false
            };
        }

        case PREV_MONTH: {
            const {monthSelected, monthNameArr, yearSelected, yearStart, monthStart, dateSelected} = state;
            const monthSelectedNew = monthSelected === 0 ? 11 : monthSelected - 1;
            const yearSelectedNew = monthSelected === 0 ? yearSelected - 1 : yearSelected;
            if (yearStart === yearSelectedNew && monthStart === monthSelectedNew) {
                return {
                    ...state,
                    monthSelected: monthSelectedNew,
                    yearSelected: yearSelectedNew,
                    monthNameSelected: monthNameArr[monthSelectedNew],
                    calendarArray: createCalendarArray(monthSelectedNew, yearSelectedNew, dateSelected),
                    nextButtonDisabled: false,
                    prevButtonDisabled: true
                };
            }
            return {
                ...state,
                monthSelected: monthSelectedNew,
                yearSelected: yearSelectedNew,
                monthNameSelected: monthNameArr[monthSelectedNew],
                calendarArray: createCalendarArray(monthSelectedNew, yearSelectedNew, dateSelected),
                nextButtonDisabled: false
            };
        }

        case SELECT_DATE: {
            const daySelected = action.payload;
            const {monthSelected, yearSelected} = state;
            const dateSelectedNew = new Date();
            dateSelectedNew.setFullYear(yearSelected, monthSelected, daySelected);
            console.log('dateSelected', dateSelectedNew);
            return {
                ...state,
                dateSelected: dateSelectedNew,
                calendarArray: createCalendarArray(monthSelected, yearSelected, dateSelectedNew),
            };
        }

        case SELECT_MONTH: {
            console.log(action.payload);
            const {monthNumber, monthName, yearList} = action.payload;
            const {dateSelected, yearEnd, monthEnd, yearStart, monthStart} = state;

            if(yearStart === yearList && monthStart === monthNumber) {
                return {
                    ...state,
                    monthSelected: monthNumber,
                    yearSelected: yearList,
                    monthNameSelected: monthName,
                    calendarArray: createCalendarArray(monthNumber, yearList, dateSelected),
                    prevButtonDisabled: true,
                    nextButtonDisabled: false
                }
            } else if (yearEnd === yearList && monthEnd === monthNumber) {
                return {
                    ...state,
                    monthSelected: monthNumber,
                    yearSelected: yearList,
                    monthNameSelected: monthName,
                    calendarArray: createCalendarArray(monthNumber, yearList, dateSelected),
                    prevButtonDisabled: false,
                    nextButtonDisabled: true
                }
            } else {
                return {
                    ...state,
                    monthSelected: monthNumber,
                    yearSelected: yearList,
                    monthNameSelected: monthName,
                    calendarArray: createCalendarArray(monthNumber, yearList, dateSelected),
                    prevButtonDisabled: false,
                    nextButtonDisabled: false
                }
            }
        }

        default:
            return state;
    }
}