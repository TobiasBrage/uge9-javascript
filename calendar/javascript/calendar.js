document.addEventListener("DOMContentLoaded", () => {
    // elements
    let monthDayElm = document.querySelector("#monthDayList");  
    let monthNameElm = document.querySelector("h2"); 
    let monthDateElm = document.querySelector("h1");  
    // init
    let monthName = ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'];
    let prevCurrentTotal;
    let nextMonthCounter = 1;
    let curDate = new Date();
    let curMonthDay = curDate.getDate();
    let curYear = curDate.getFullYear();
    let curMonth = curDate.getMonth();
    let calDate = new Date(curYear, curMonth+1);
    let monthDays = calDate.getUTCDate();
    // init body
    monthNameElm.innerHTML = monthName[curMonth];
    monthDateElm.innerHTML = curMonthDay;
    // calendar
    for (counterDays = 1; counterDays <= monthDays; counterDays++) {
        let monthWeekDate = new Date(curYear, curMonth, counterDays);
        let startWeekDay = monthWeekDate.getDay();
        if(startWeekDay == 0)
            startWeekDay = 6;
        else
            startWeekDay--;
        // previous month days
        if(counterDays == 1 && startWeekDay > 0) {
            let prevMonth = curMonth;
            if (prevMonth == 0)
                prevMonth = 12;
            let prevMonthDate = new Date(curYear, prevMonth);
            let prevMonthDays = prevMonthDate.getUTCDate()-startWeekDay;
            prevCurrentTotal = startWeekDay+monthDays;
            while(startWeekDay > 0) {
                prevMonthDays++;
                monthDayElm.innerHTML += `<li class="monthDayName"><span class="calendarPrevDay">${prevMonthDays}</span></li>`;
                startWeekDay--;
            }
        }
        // current month days
        if(curMonthDay == counterDays) {
            monthDayElm.innerHTML += `<li class="monthDayName"><span id="calendarToday">${counterDays}</span></li>`;
        } else {
            monthDayElm.innerHTML += `<li class="monthDayName"><span class="calendarDay">${counterDays}</span></li>`;
        }
    }
    // next month days
    if(prevCurrentTotal == undefined) {
        prevCurrentTotal = monthDays;
    }
    if(prevCurrentTotal < 35) {
        let nextMonthDays = 35-prevCurrentTotal;
        while(nextMonthDays > 0) {
            monthDayElm.innerHTML += `<li class="monthDayName"><span class="calendarPrevDay">${nextMonthCounter}</span></li>`;
            nextMonthDays--;
            nextMonthCounter++;
        }
    } else if(prevCurrentTotal > 35) {
        let nextMonthDays = 42-prevCurrentTotal;
        while(nextMonthDays > 0) {
            monthDayElm.innerHTML += `<li class="monthDayName"><span class="calendarPrevDay">${nextMonthCounter}</span></li>`;
            nextMonthDays--;
            nextMonthCounter++;
        }
    }
});