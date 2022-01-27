import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Subscription, interval} from 'rxjs';

@Injectable({
  providedIn: 'root',
})


export class TimerService {

  public timerSubscription:Subscription; 
  public endDate; 
  public timerTotalAmount = 60; 
  public timerCurrentAmount = 60; 
  public countDownTimes = [1,2,5]; 
  public isTimerRunning = false; 


  constructor() { }
  //Updates the Total time to countdown
  public updateTimeCount(_newTime:any){

    this.stopTimer();
    this.timerTotalAmount = this.countDownTimes[_newTime]*60; 
    this.restartCountDownTime(); 
  }
  public async startTimer(_from: any){  
    //unsubscribe if there is any previous scriptions
    try{
      this.timerSubscription.unsubscribe();  
    }catch(e){}

    console.log("Time Started"); 
    this.isTimerRunning = true; 
    this.endDate = new Date(new Date().getTime() + this.timerCurrentAmount*1000); 
    this.timerSubscription = interval(100).subscribe( x => {this.countDown(); console.log(_from)});  
  }
  public stopTimer(){
    try{
      this.timerSubscription.unsubscribe(); 
    }catch(e){}
    
    this.isTimerRunning = false;     
  }
  private restartCountDownTime(){
    this.timerCurrentAmount = this.timerTotalAmount; 
  }
  private countDown(){
    //Get Difference Between the times
    let startDate = new Date(); 
    let timeLeft = this.endDate.getTime() - startDate.getTime(); 

    //Stop Subscription
    if(Math.floor((timeLeft/1000)) <= 0){
      this.stopTimer(); 
      this.isTimerRunning = false; 
      this.timerCurrentAmount = 0; 
    }else{
      console.log("Timer: "+this.timerCurrentAmount); 
      this.timerCurrentAmount = Math.floor((timeLeft/1000)); 
    }
  }
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe(); 
}
}
