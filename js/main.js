import { CalendarYear } from "./CalendarYear.js";


const calendar = new CalendarYear(document.querySelector('.full-calendar'), 2023)

document.getElementById('year-select').addEventListener('change', function() {
    calendar.year = this.value;
})






// const calendar = new CalendarMonth($fullCalendar);

// document.getElementById('next-btn').addEventListener('click',function() {
//     calendar.month++;
// })

// document.getElementById('prev-btn').addEventListener('click',function() {
//     calendar.month--;
// })