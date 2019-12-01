const monthNameArr = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני",
 "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];
 const weekDayNames = ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"];

const dateToday = new Date();
const dayToday = dateToday.getDate();
const monthNow = dateToday.getMonth();
const yearNow = dateToday.getFullYear();

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

const buildCalendar = (daysInMonth, weekDayFirst, monthSelected, chosenDay) => {
    let counter = 1
    let arr = [];
    for (let i = 0; i < 42; i++) {
        if (i >= weekDayFirst && i < weekDayFirst + daysInMonth) {
            arr.push({
                id: `day-${i}`,
                dayNumber: counter,
                celectable: true,
                celectedDay: false,
                empty: false
            });
            counter++;
        } else {
            arr.push({
                id: `day-${i}`,
                dayNumber: '',
                celectable: false,
                celectedDay: false,
                empty: true
            });
        }
    }
    if (monthNow === monthSelected) {
        for (let i = weekDayFirst; i < weekDayFirst + dayToday - 1; i++) {
            arr[i].celectable = false;
        }
    }
    if (chosenDay) {
        arr[chosenDay + weekDayFirst - 1].celectedDay = true;
    }
    return arr;
}

export const createCalendarArray = (monthSelected, yearSelected, dateSelected) => {
    let chosenDay = null;
    const dateTemp = new Date();
    dateTemp.setFullYear(yearSelected, monthSelected, 1);
    const weekDayFirst = dateTemp.getDay();
    const daysInMonth = daysInMonthSelected(monthSelected, yearSelected);

    if (dateSelected 
        && dateSelected.getFullYear() === yearSelected 
        && dateSelected.getMonth() === monthSelected) {
            chosenDay = dateSelected.getDate()
    }

    return buildCalendar(daysInMonth, weekDayFirst, monthSelected, chosenDay, monthNow, dayToday);
}

const createDropdownList = () => {
    const list = [];
    let monthTemp = monthNow;
    let yearTemp = yearNow;

    for (let i = 0; i < monthNameArr.length; i++) {
        if(monthTemp <= 11) {
            list.push({
                monthNumber: monthTemp,
                monthName: monthNameArr[monthTemp],
                yearList: yearTemp
            });
            monthTemp++;
        } else {
            monthTemp = 0;
            yearTemp++;
            list.push({
                monthNumber: monthTemp,
                monthName: monthNameArr[monthTemp],
                yearList: yearTemp
            });
            monthTemp++;
        }
    }

    return list;
}

const dropdownList = createDropdownList();
const calendarArray = createCalendarArray(monthNow, yearNow);

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
    prevButtonDisabled: true,
    dateSelected: null,
    dropdownList: dropdownList,
    weekDayNames: weekDayNames
}