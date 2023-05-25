import { CalendarMonth } from "./CalendarMonth.js";

export class CalendarYear {

    _date = new Date()

    constructor($container, $currentYear = null) {
        this.$container = $container;

        if($currentYear !== null) {
            this._date.setFullYear($currentYear);
        }

        this.renderYear();
    }

    renderYear() {
        this.$container.innerHTML = '';
        this.$fullCalendar = document.createElement('div');
        this.$fullCalendar.classList.add('full-calendar');

        for (let index = 0; index < 12; index++) {
            const $containerMonth = document.createElement('div');
            $containerMonth.classList.add('calendar-month');
        
            const calendar = new CalendarMonth($containerMonth, this.year, index);
            calendar.month = index;
        
            this.$fullCalendar.append($containerMonth);
        }

        this.$container.append(this.$fullCalendar);
    }

    set year(value) {
        this._date.setFullYear(value);
        this.renderYear();
    }

    get year() {
        return this._date.getFullYear();
    }
}
