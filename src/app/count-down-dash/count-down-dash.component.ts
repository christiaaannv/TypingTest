import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timerService/timer.service';

@Component({
  selector: 'app-count-down-dash',
  templateUrl: './count-down-dash.component.html',
  styleUrls: ['./count-down-dash.component.css'],
  providers:[TimerService]
})
export class CountDownDashComponent implements OnInit {

  constructor(public timerService: TimerService) { }

  onClick_updateTimer(_value:number)
  {
    this.timerService.updateTimeCount(_value); 

  }
  onClick_startTimer(){
    this.timerService.startTimer("From Start Button"); 
  }

  onClick_stopTimer(){
    this.timerService.stopTimer(); 
  }
  
  ngOnInit(): void {}

}
