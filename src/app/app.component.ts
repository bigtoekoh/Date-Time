import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment-timezone'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {
  title: string;
  time: string;
  color: null;


  constructor(private datePipe: DatePipe){
      this.title = 'US Time Zone Display';

  }

  getDateByZone(timezone){
      if(timezone === 'PST'){
          this.time = moment().tz('America/Los_Angeles').format('MMMM Do YYYY, h:mm:ss a');
      }else if(timezone === 'MST'){
          this.time = moment().tz('America/Boise').format('MMMM Do YYYY, h:mm:ss a');
      }else if(timezone === 'CST'){
          this.time = moment().tz('America/North_Dakota/New_Salem').format('MMMM Do YYYY, h:mm:ss a');
      }else if(timezone === 'EST'){
          this.time = moment().tz('America/New_York').format('MMMM Do YYYY, h:mm:ss a');
      }else{
          this.time = '';
      }
      this.color = timezone;
  }

  Clear(){
      this.time = '';
      this.color = null;
  }
}
