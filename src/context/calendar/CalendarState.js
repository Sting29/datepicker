import React, {useReducer} from 'react'
import {CalendarContext} from './calendarContext';
import {calendarReducer} from './calendarReducer';
import {initialState} from '../../helpers/calendar';
import {NEXT_MONTH, PREV_MONTH, SELECT_DATE} from '../types';

export const CalendarState = ({children}) => {
    const [state, dispatch] = useReducer(calendarReducer, initialState);

    const nextMonth = () => {
        dispatch({
            type: NEXT_MONTH
        });
    };

    const prevMonth = () => {
        dispatch({
            type: PREV_MONTH
        });
    };

    const selectDate = id => {
        dispatch({
            type: SELECT_DATE,
            payload: id
        })
    }

    return (
        <CalendarContext.Provider value={{
            nextMonth, prevMonth, selectDate,
            calendarData: state
        }}>
            {children}
        </CalendarContext.Provider>
    )
}