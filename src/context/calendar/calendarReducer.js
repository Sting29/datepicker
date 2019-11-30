import {NEXT_MONTH, PREV_MONTH, SELECT_DATE} from '../types';
import {createCalendarArray} from '../../helpers/calendar';

export const calendarReducer = (state, action) => {
    switch (action.type) {
        case NEXT_MONTH: {
            const {monthSelected, monthNameArr, yearSelected, yearEnd, monthEnd} = state;
            if (yearEnd === yearSelected && monthEnd === monthSelected) {
                return {
                    ...state,
                    nextButtonDisabled: true
                };
            }
            const monthSelectedNew = monthSelected === 11 ? 0 : monthSelected + 1;
            const yearSelectedNew = monthSelected === 11 ? yearSelected + 1 : yearSelected;
            return {
                ...state,
                monthSelected: monthSelectedNew,
                yearSelected: yearSelectedNew,
                monthNameSelected: monthNameArr[monthSelectedNew],
                calendarArray: createCalendarArray(monthSelectedNew, yearSelectedNew),
                prevButtonDisabled: false
            };
        }

        case PREV_MONTH: {
            const {monthSelected, monthNameArr, yearSelected, yearStart, monthStart} = state;
            if (yearStart === yearSelected && monthStart === monthSelected) {
                return {
                    ...state,
                    prevButtonDisabled: true
                };
            }
            const monthSelectedNew = monthSelected === 0 ? 11 : monthSelected - 1;
            const yearSelectedNew = monthSelected === 0 ? yearSelected - 1 : yearSelected;
            return {
                ...state,
                monthSelected: monthSelectedNew,
                yearSelected: yearSelectedNew,
                monthNameSelected: monthNameArr[monthSelectedNew],
                calendarArray: createCalendarArray(monthSelectedNew, yearSelectedNew),
                nextButtonDisabled: false
            };
        }

        case SELECT_DATE: {
            const {payload} = action;
            console.log('SELECT_DAT red', payload, action);

            return {...state, ch: true};
        }

        default:
            return state;
    }
}