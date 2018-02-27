document.addEventListener("DOMContentLoaded", () => {
    // elements
    let monthDayElm = document.querySelector("#monthDayList");  
    let monthNameElm = document.querySelector("h2"); 
    let monthDateElm = document.querySelector("h1");  
    // init
    let monthName = ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'];
    let monthDayStart = false;
    let curDate = new Date();
    let curMonthDay = curDate.getDate();
    let curYear = curDate.getFullYear();
    let curMonth = curDate.getMonth();
    let calDate = new Date(curYear, curMonth+1);
    let monthDays = calDate.getUTCDate();
    // init body
    monthNameElm.innerHTML = monthName[curMonth];
    monthDateElm.innerHTML = curMonthDay;

    for (counterDays = 1; counterDays <= monthDays; counterDays++) {
        let testDate = new Date(curYear, curMonth, counterDays);
        let testDay = testDate.getDay();
        if(testDay == 0)
            testDay = 6;
        else
            testDay = testDay - 1;
        if(counterDays == 1) {
            console.log(testDay);
            for (lastMonthDay = testDay; lastMonthDay > 0; lastMonthDay--) {
                monthDayElm.innerHTML += `<li class="monthDayName"></li>`;
            }
        }
        monthDayElm.innerHTML += `<li class="monthDayName">${counterDays}</li>`;
    }
});