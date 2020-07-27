import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  objActualDate = {
    month: moment().format('MMMM'),
    year: moment().format('YYYY'),
    momentFormat: moment()
  };
  daysWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  calendar = [];
  constructor() {}

  ngOnInit(): void {
      this.loadInfoCalendar(this.objActualDate.momentFormat);
  }

  loadInfoCalendar(actualDate): any {
    const startWeek = moment(actualDate).startOf('month').startOf('isoWeek');
    const endWeek = moment(actualDate).endOf('month').endOf('isoWeek');
    const selectMonthStart = moment(actualDate).startOf('month');
    const selectMonthEnd = moment(actualDate).endOf('month');

    const range = moment.range(startWeek, endWeek);
    const daysArray = Array.from(range.by('days'));
    const weeksArray = Array.from(range.by('weeks'));

    let objDate;
    const array = [];
    _.forEach(weeksArray, (w) => {
        objDate = {
          week: w.isoWeek(),
          days: []
        };
        _.forEach(daysArray, (day) => {
          if (w.isoWeek() === day.isoWeek()) {
            objDate.days.push({
              objMoment: day,
              date: day.format('YYYY-MM-DD'),
              week: day.isoWeek(),
              day: day.format('DD'),
              actualDay: moment(day.format('YYYY-MM-DD')).isSame(moment().format('YYYY-MM-DD')),
              isActualMonth: day.isBetween(selectMonthStart, selectMonthEnd, null, '[]')
            });
          }
        });
        array.push(objDate);
    });
    this.calendar = array;
    console.log(this.calendar);
  }

}
