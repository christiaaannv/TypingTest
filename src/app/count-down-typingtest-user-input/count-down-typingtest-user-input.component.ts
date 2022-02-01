import { Component, OnInit } from '@angular/core';
import { TypingTestService } from '../services/typingTest/typing-test.service';
import { TimerService } from '../services/timerService/timer.service';

@Component({
  selector: 'app-count-down-typingtest-user-input',
  templateUrl: './count-down-typingtest-user-input.component.html',
  styleUrls: ['./count-down-typingtest-user-input.component.css']
})
export class CountDownTypingtestUserInputComponent implements OnInit {

  //public timerService: TimerService; 

  constructor(public typingTestService: TypingTestService, public timerService: TimerService) { }

  public onInput_UserInput(_value:any){

    if(this.typingTestService.currentWordIndex == 0 && this.timerService.isTimerRunning == false){
      this.timerService.startTimer(); 
    }
    if(_value.value == " " ||_value.value == "\n" ){
      _value.value = ""; 
      return; 
    }
    //check is space or Tab has been entered
    if(_value.value.includes(" ") || _value.value.includes('\n')){
      
      _value.value = ""; 
      this.typingTestService.moveToNextWord(); 
      this.typingTestService.currentWordIndex++; 
    }  
    this.typingTestService.currentUserInputText.next(_value.value); 
  }
  ngOnInit(): void {
    //Get TimerService Instance 
    //this.timerService = this.typingTestService.getTimerServiceInstatiation(); 
  }



}
