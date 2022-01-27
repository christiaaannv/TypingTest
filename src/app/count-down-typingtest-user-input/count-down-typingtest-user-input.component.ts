import { Component, OnInit } from '@angular/core';
import { TypingTestService } from '../services/typingTest/typing-test.service';

@Component({
  selector: 'app-count-down-typingtest-user-input',
  templateUrl: './count-down-typingtest-user-input.component.html',
  styleUrls: ['./count-down-typingtest-user-input.component.css']
})
export class CountDownTypingtestUserInputComponent implements OnInit {

  constructor(public typingTestService: TypingTestService) { }

  public onInput_UserInput(_value:any){

    
    console.log("Timer Status: "+this.typingTestService.getTimeStatus());
    console.log("Current Word: "+this.typingTestService.currentWordNum);
    if(this.typingTestService.currentWordNum == 0 && this.typingTestService.getTimeStatus() == false){
      this.typingTestService.startTimer(); 
    }

    if(_value.value == " " ||_value.value == "\n" ){
      _value.value = ""; 
      return; 
    }
    //check is space or Tab has been entered
    if(_value.value.includes(" ") || _value.value.includes('\n')){
      
      _value.value = ""; 
      this.typingTestService.moveToNextWord(); 
      this.typingTestService.currentWordNum++; 
    }
    
    this.typingTestService.currentWord.next(_value.value); 
    console.log(_value.value); 
  }

  ngOnInit(): void {


  }



}
