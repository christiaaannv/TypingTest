import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, InteropObservable} from 'rxjs';
import { TimerService } from '../services/timerService/timer.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit{

  constructor(public timerService: TimerService){}
  ngOnInit(): void {}

}
