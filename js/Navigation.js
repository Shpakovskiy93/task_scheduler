import { CalendarMonth } from "./CalendarMonth.js";
import { CalendarYear } from "./CalendarYear.js";



export class Navigation {
    _date = new Date();
    _mode = 'year';

    constructor($container) {
        this.$container = $container;

        this.$navigation = document.createElement('div');
        this.$navigation.classList.add('navigation');

        this.$header = document.createElement('div');
        this.$header.classList.add('navigation__header');

        this.$mode = document.createElement('div');
        this.$mode.classList.add('navigation__mode');
        this.$modeYear = document.createElement('button');
        this.$modeYear.textContent = 'year';
        this.$modeYear.classList.add('navigation__mode-btn');
        this.$modeYear.addEventListener('click', () => {
            this.mode = 'year';
        })
        this.$modeMonth = document.createElement('button');
        this.$modeMonth.textContent = 'month';
        this.$modeMonth.classList.add('navigation__mode-btn')
        this.$modeMonth.addEventListener('click', () => {
            this.mode = 'month';
        })
        this.$modeDay = document.createElement('button');
        this.$modeDay.textContent = 'day';
        this.$modeDay.classList.add('navigation__mode-btn')
        this.$modeDay.addEventListener('click', () => {
            this.mode = 'day';
        })
        this.$mode.append(this.$modeYear, this.$modeMonth, this.$modeDay);


        this.$date = document.createElement('div');
        this.$date.classList.add('navigation__date');
        this.$dateInp = document.createElement('input');
        this.$dateInp.type = 'date';
        this.$dateInp.addEventListener('change', () => {
            this.date = new Date(this.$dateInp.value);
        })
        this.$date.append(this.$dateInp);


        this.$header.append(this.$mode, this.$date);


        this.$body = document.createElement('div');
        this.$body.classList.add('navigation__body');


        this.$navigation.append(this.$header, this.$body)

        this.$bodyYear = document.createElement('div');
        this.$bodyYear.classList.add('navigation__body-mode');
        this.CalendarYear = new CalendarYear(this.$bodyYear);
        this.$bodyMonth = document.createElement('div');
        this.$bodyMonth.classList.add('navigation__body-mode');
        this.CalendarMonth = new CalendarMonth(this.$bodyMonth);
        this.$bodyDay = document.createElement('div');
        this.$bodyDay.classList.add('navigation__body-mode');
        this.$bodyDay.innerHTML = `<h2>this is day</h2>`;

        this.$body.append(this.$bodyYear, this.$bodyMonth, this.$bodyDay);

        this.mode = 'year';

        this.$container.append(this.$navigation)
    }


    set mode(value) {

        switch (value) {
            case 'year':
                this.$modeYear.classList.add('navigation__mode-btn_active');
                this.$modeMonth.classList.remove('navigation__mode-btn_active');
                this.$modeDay.classList.remove('navigation__mode-btn_active');

                this.$bodyYear.classList.add('navigation__body-mode_active');
                this.$bodyMonth.classList.remove('navigation__body-mode_active');
                this.$bodyDay.classList.remove('navigation__body-mode_active');
                break;
            case 'month':
                this.$modeMonth.classList.add('navigation__mode-btn_active');
                this.$modeYear.classList.remove('navigation__mode-btn_active');
                this.$modeDay.classList.remove('navigation__mode-btn_active');

                this.$bodyMonth.classList.add('navigation__body-mode_active');
                this.$bodyYear.classList.remove('navigation__body-mode_active');
                this.$bodyDay.classList.remove('navigation__body-mode_active');
                break;
            case 'day':
                this.$modeDay.classList.add('navigation__mode-btn_active');
                this.$modeYear.classList.remove('navigation__mode-btn_active');
                this.$modeMonth.classList.remove('navigation__mode-btn_active');

                this.$bodyDay.classList.add('navigation__body-mode_active');
                this.$bodyYear.classList.remove('navigation__body-mode_active');
                this.$bodyMonth.classList.remove('navigation__body-mode_active');
                break;
            default:
                this.$modeYear.classList.add('navigation__mode-btn_active');
                this.$modeMonth.classList.remove('navigation__mode-btn_active');
                this.$modeDay.classList.remove('navigation__mode-btn_active');

                this.$bodyYear.classList.add('navigation__body-mode_active');
                this.$bodyMonth.classList.remove('navigation__body-mode_active');
                this.$bodyDay.classList.remove('navigation__body-mode_active');
                break;
        }

        this._mode = value;
    }
    get mode() {
        return this._mode;
    }

    set date(value) {
        this._date = value;
        this.CalendarYear.year = this.year;
        this.CalendarMonth.year = this.year;
        this.CalendarMonth.month = this.month;
    }
    get date() {
        return this._date
    }

    set day(value) {
        this._date.setDay(value);
    }
    get day() {
        return this._date.getDay();
    }

    set month(value) {
        this._date.setMonth(value);
        
        this.CalendarMonth.year = this.year;
        this.CalendarMonth.month = value
    }
    get month() {
        return this._date.getMonth();
    }

    set year(value) {
        this._date.setFullYear(value);

        this.CalendarYear.year = value;
        this.CalendarMonth.year = value;
        this.CalendarMonth.month = this.month
    }
    get year() {
        return this._date.getFullYear();
    }
}