import { CalendarMonth } from "./CalendarMonth.js";

const $fullCalendar = document.querySelector('.full-calendar');


for (let index = 0; index < 12; index++) {
    const $container = document.createElement('div');
    $container.classList.add('calendar');

    const calendar = new CalendarMonth($container);
    calendar.month = index;

    $fullCalendar.append($container);
}

// const calendar = new CalendarMonth($fullCalendar);

// document.getElementById('next-btn').addEventListener('click',function() {
//     calendar.month++;
// })

// document.getElementById('prev-btn').addEventListener('click',function() {
//     calendar.month--;
// })