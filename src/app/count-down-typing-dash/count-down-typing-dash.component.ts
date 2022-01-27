import { Component, OnInit } from '@angular/core';
import { TypingTestService } from '../services/typingTest/typing-test.service';

@Component({
  selector: 'app-count-down-typing-dash',
  templateUrl: './count-down-typing-dash.component.html',
  styleUrls: ['./count-down-typing-dash.component.css'],
  providers:[TypingTestService]
})
export class CountDownTypingDashComponent implements OnInit {

  constructor(public typingTestService: TypingTestService) { }

  ngOnInit(): void {
  }

}
