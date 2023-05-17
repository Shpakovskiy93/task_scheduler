const monthList = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];
const weekDaysList = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

// Select data
const currentDate = new Date()
const selectMonth = currentDate.getMonth();
const selectYear = currentDate.getFullYear();

const $calendar = document.querySelector('.calendar');


// today's check
function checkToday(selectYear, selectMonth, selectDay) {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    if(day == selectDay && month == selectMonth && year == selectYear) return true;
}


// head calendar
function createCalendarHead(selectYear, selectMonth) {
    const $head = document.createElement('div');
    const $month = document.createElement('div');
    const $year = document.createElement('div');

    $head.classList.add('calendar__head');
    $month.classList.add('calendar__month');
    $year.classList.add('calendar__year');

    $month.textContent = monthList[selectMonth];
    $year.textContent = selectYear;

    $head.append($month);
    $head.append($year);

    return $head;
}


// body calendar
function createCalendarBody() {
    const $body = document.createElement('div');
    $body.classList.add('calendar__body');

    return $body;
}


// day of the week
function createWeekDay(index) {
    const $weekDayCell = document.createElement('div');
    $weekDayCell.classList.add('calendar__cell', 'calendar__cell_week-day');
    $weekDayCell.textContent = weekDaysList[index];
    
    if(index > 4) $weekDayCell.classList.add('calendar__cell_weekend');

    return $weekDayCell;
}


// head with day of the week
function createCalendarWeekDays($body) {
    for (let i = 0; i < weekDaysList.length; i++) {
        $body.append(createWeekDay(i));
    }
}


// day
function createDayCell(selectYear, selectMonth, index) {
    const firstDay = new Date(selectYear, selectMonth, 0).getDay();
    const monthDaysCount = new Date(selectYear, selectMonth + 1, 0).getDate();

    if(index >= firstDay && index < monthDaysCount + firstDay) {
        const day = index - firstDay + 1;
        const weekDay = new Date(selectYear, selectMonth, day).getDay();

        const $dayCell = document.createElement('div');
        $dayCell.classList.add('calendar__cell', 'calendar__cell_day');
        $dayCell.textContent = day;

        if(weekDay == 0 || weekDay == 6) {
            $dayCell.classList.add('calendar__cell_day-weekend');
        }

        if(checkToday(selectYear, selectMonth, day)) {
            $dayCell.classList.add('calendar__cell_day-today');
        }

        return $dayCell;
    } else {  
        const $dayCell = document.createElement('div');
        $dayCell.classList.add('calendar__cell');
        return $dayCell;
    }
}


function createCalendarBodyDays($body, selectYear, selectMonth) {
    // calendar grid
    for (let i = 0; i < weekDaysList.length * 6; i++) {
        $body.append(createDayCell(selectYear, selectMonth, i));
    }

}


// render
function render(selectYear, selectMonth) {

    $calendar.innerHTML = '';

    const $head = createCalendarHead(selectYear, selectMonth);
    $calendar.append($head);

    const $body = createCalendarBody();
    $calendar.append($body);

    createCalendarWeekDays($body);

    createCalendarBodyDays($body, selectYear, selectMonth);
}
render(selectYear, selectMonth);


document.getElementById('next-btn').addEventListener('click',function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    render(currentDate.getFullYear(), currentDate.getMonth());
})

document.getElementById('prev-btn').addEventListener('click',function() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    render(currentDate.getFullYear(), currentDate.getMonth());
})