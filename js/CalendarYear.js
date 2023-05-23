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

        for (let index = 0; index < 12; index++) {
            const $containerMonth = document.createElement('div');
            $containerMonth.classList.add('calendar-month');
        
            const calendar = new CalendarMonth($containerMonth, this.year, index);
            calendar.month = index;
        
            this.$container.append($containerMonth);
        }
    }

    set year(value) {
        this._date.setFullYear(value);
        this.renderYear();
    }

    get year() {
        return this._date.getFullYear();
    }
}
