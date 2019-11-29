import React from 'react';

import {Calendar} from '../Calendar/Calendar';
import './Datepicker.css';

export const Datepicker = () => {
    return (
        <div className="datepicker">
        <button className="datepicker_exit-button">X</button>
           <div className="datepicker-wrap">
                <h3 className="datepicker_title">תאריך יציאה</h3>
                <Calendar />
                <p className="datepicker_legend">
                    <span className="datepicker_legend__allowed">תאריכי</span>
                    <span className="datepicker_legend__denied">אפשרית</span>
                </p>
           </div>
        </div>
    )
}