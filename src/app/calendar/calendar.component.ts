import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as _ from 'lodash';
import * as Moment from 'moment';
import {extendMoment} from 'moment-range';

const moment = extendMoment(Moment);
moment.locale('es');
import * as $ from 'jquery';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  objActualDate = {
    date: moment().format('MMMM YYYY'),
    momentFormat: undefined
  };
  daysWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  calendar = [];
  objCreateEvent;
  arrayOrders = [];

  constructor() {
  }

  ngOnInit(): void {
    this.objCreateEvent = {
      startDate: moment().format('DD-MM-YYYY'),
      endDate: moment().add(15, 'd').format('DD-MM-YYYY'),
      name: undefined,
      telephone: undefined,
      address: undefined,
      isPresent: false,
      receives: undefined,
      recipientsPhone: undefined,
      deliveryAddress: undefined,
      orders: [{
        idOrder: 1,
        ref: undefined,
        model: undefined,
        quantity: 1,
        description: undefined,
        unitValue: 0,
        discount: 0
      }],
    };
    this.objActualDate.momentFormat = moment();
    this.loadInfoCalendar(this.objActualDate.momentFormat);
    this.arrayOrders = [
      {
        endDate: moment().add(15, 'd'),
        deliveryOrder: moment().add(15, 'd').diff(moment(), 'days'),
        name: 'Alexis Corrale Perea',
        telephone: 3162419244,
        address: 'cra 7 # 6-63',
        isPresent: false,
        isPersonalized: true,
        receives: 'Alexis Corrale Perea',
        recipientsPhone: 3162419244,
        deliveryAddress: 'cra 7 # 6-63',
        orders: [{
          idOrder: 1,
          ref: 'AB-35',
          model: 'Alfred',
          quantity: 4,
          description: 'Se desea que se tenga un bolsillo adicional ',
          unitValue: 150000,
          discount: 50000
        }],
      },
      {
        endDate: moment().add(15, 'd'),
        deliveryOrder: moment().add(15, 'd').diff(moment(), 'days'),
        name: 'Alexis Corrale Perea',
        telephone: 3162419244,
        address: 'cra 7 # 6-63',
        isPresent: false,
        isPersonalized: true,
        receives: 'Alexis Corrale Perea',
        recipientsPhone: 3162419244,
        deliveryAddress: 'cra 7 # 6-63',
        orders: [{
          idOrder: 1,
          ref: 'AB-35',
          model: 'Alfred',
          quantity: 4,
          description: 'Se desea que se tenga un bolsillo adicional ',
          unitValue: 150000,
          discount: 50000
        }],
      }
    ];
  }

  loadInfoCalendar(actualDate): void {
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
  }

  nextDate(): void {
    this.objActualDate = {
      date: moment(this.objActualDate.momentFormat).add(1, 'M').format('MMMM  YYYY'),
      momentFormat: moment(this.objActualDate.momentFormat).add(1, 'M')
    };
    this.loadInfoCalendar(this.objActualDate.momentFormat);
  }

  previousDate(): void {
    this.objActualDate = {
      date: moment(this.objActualDate.momentFormat).subtract(1, 'M').format('MMMM  YYYY'),
      momentFormat: moment(this.objActualDate.momentFormat).subtract(1, 'M')
    };
    this.loadInfoCalendar(this.objActualDate.momentFormat);
  }

  openModalCreateEvent(): void {
    $('#modalCreateEvent').modal('show');
  }

  addOrder(): void {
    const obj = {
      idOrder: _.max(_.map(this.objCreateEvent.orders, (order) => order.idOrder)) + 1,
      ref: undefined,
      model: undefined,
      quantity: 1,
      description: undefined,
      unitValue: 0,
      discount: 0
    };
    this.objCreateEvent.orders.push(obj);
  }

  removeOrder(pos): void {
    this.objCreateEvent.orders.splice(pos, 1);
  }

  clearOrder(): void {
    this.objCreateEvent.orders[0] = {
      idOrder: 0,
      ref: undefined,
      model: undefined,
      quantity: 1,
      description: undefined,
      unitValue: 0,
      discount: 0
    };
  }

}
