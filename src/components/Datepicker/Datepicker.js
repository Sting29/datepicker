import React from 'react';

import {Calendar} from '../Calendar/Calendar';
import './Datepicker.css';

export const Datepicker = () => {
    return (
        <div className="datepicker">
            <button className="datepicker_exit-button"></button>
            <div className="datepicker-wrap">
                <h3 className="datepicker_title">תאריך יציאה</h3>
                <Calendar />
                <p className="datepicker_legend">
                    <span className="datepicker_legend__allowed"></span>
                    <span>תאריכי יציאה וחזרה אפשריים</span>
                </p>
                <p className="datepicker_legend">
                    <span className="datepicker_legend__denied"></span>
                    <span>אפשרית טיסת צירטר בתאריכים אלו</span>
                </p>
            </div>
        </div>
    )
}