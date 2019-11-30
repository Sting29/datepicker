const dateToday = new Date();
const dayToday = dateToday.getDate();
const monthNow = dateToday.getMonth();
const yearNow = dateToday.getFullYear();
const monthNameArr = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני",
 "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];

const monthEnd = monthNow === 0 ? 11 : monthNow - 1;
const yearEnd = yearNow + 1;
let monthNameSelected = monthNameArr[monthNow];

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

const buildCalendar = (daysInMonth, weekDayFirst, monthSelected) => {
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

export const createCalendarArray = (monthSelected, yearSelected) => {
    let dateTemp = new Date();
    dateTemp.setFullYear(yearSelected, monthSelected, 1);
    const weekDayFirst = dateTemp.getDay();
    const daysInMonth = daysInMonthSelected(monthSelected, yearSelected);

    return buildCalendar(daysInMonth, weekDayFirst, monthSelected, monthNow, dayToday);
}

const calendarArray = createCalendarArray(monthNow, yearNow, dayToday, monthNow);

export const initialState = {
    monthNameArr: monthNameArr,
    monthSelected: monthNow,
    monthNameSelected: monthNameSelected,
    yearSelected: yearNow,
    calendarArray: calendarArray,
    monthStart: monthNow,
    yearStart: yearNow,
    monthEnd: monthEnd,
    yearEnd: yearEnd,
    nextButtonDisabled: false,
    prevButtonDisabled: true
}