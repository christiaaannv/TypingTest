import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timerService/timer.service';
import { TypingTestService } from '../services/typingTest/typing-test.service';
@Component({
  selector: 'app-count-down-dash',
  templateUrl: './count-down-dash.component.html',
  styleUrls: ['./count-down-dash.component.css'],
  providers:[TimerService]
})
export class CountDownDashComponent implements OnInit {

  public timerService: TimerService; 

  constructor(public typingTestService: TypingTestService) { }

  onClick_updateTimer(_value:number)
  {
    this.timerService.updateTimeCount(_value); 

  }
  onClick_startTimer(){
    this.timerService.startTimer(); 
  }

  onClick_reset(){

    console.log("restart Test"); 
    //First Stop Timer
    this.typingTestService.resetTest();
    //Setup new test scripts

  }
  onClick_stopTimer(){
    this.timerService.stopTimer(); 
  }
  
  ngOnInit(): void {
    //Get Time Service Instantiation
    this.timerService = this.typingTestService.getTimerServiceInstatiation(); 
  }

}
