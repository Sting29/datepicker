import React from 'react';

import './CalendarTable.css';

export const CalendarTable = (props) => {
    const {tableData} = props;
    console.log(tableData)

    const days = tableData.map((item) => {
        const { id, dayNumber, celectable, celectedDay } = item;

        return (
            <td key={id}>
                <button type="button" disabled={!celectable}>{dayNumber}</button>
            </td>
        );
      });
    
    return (
        <div className="calendar-table">
            <div className="calendar-table_week-days">
                <span className="calendar-table_week-day">`א</span>
                <span className="calendar-table_week-day">`ב</span>
                <span className="calendar-table_week-day">`ג</span>
                <span className="calendar-table_week-day">`ד</span>
                <span className="calendar-table_week-day">`ה</span>
                <span className="calendar-table_week-day">`ו</span>
                <span className="calendar-table_week-day">`ש</span>
            </div>
            <table>
                <tbody>
                                    <tr>
                    {days}
                </tr>
                </tbody>

            </table>
        </div>
    )
}