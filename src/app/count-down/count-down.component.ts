import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, InteropObservable} from 'rxjs';
import { TimerService } from '../services/timerService/timer.service';
import { TypingTestService } from '../services/typingTest/typing-test.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit{

  //public timerService: TimerService; 

  constructor(public typingTestService: TypingTestService, public timerService: TimerService){}
  ngOnInit(): void {
    //Get Time Service Instantiation
    //this.timerService = this.typingTestService.getTimerServiceInstatiation(); 
  }

}
