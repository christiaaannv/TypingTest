import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { TimerService } from '../timerService/timer.service';

enum wordState{
  Inactive, 
  ActiveCorrect,
  ActiveIncorrect,
  Correct,
  Incorrect
}

@Injectable({
  providedIn: 'root',
})
export class TypingTestService {

  public testText: string;
  public testTextHTMLFormat: string; 
  public paragraphWordState: {word:string, state:wordState}[]; 
  public textReadyChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public currentWord: BehaviorSubject<string> = new BehaviorSubject<string>(""); 
  public currentWordNum: number; 
  public scrollby: number; 
  public subs: Subscription; 

  //colors: 
  private ActiveCorrect_color = "background:rgba(224, 224, 224, 0.63);";
  private ActiveIncorrect_color = "background:rgba(224, 0, 0, 0.63);"; 
  private Correct_color = "color:rgba(0, 224, 0, 1);"; 
  private Incorrect_color = "color:rgba(224, 0, 0, 1);"; 
  private Inactive_color = ""; 

  public readonly STATE_TO_COLOR = {
    [wordState.Inactive]: this.Inactive_color,
    [wordState.ActiveCorrect]: this.ActiveCorrect_color, 
    [wordState.ActiveIncorrect]: this.ActiveIncorrect_color, 
    [wordState.Correct]: this.Correct_color, 
    [wordState.Incorrect]: this.Incorrect_color
  }
  constructor(private httpClient: HttpClient, private timerService: TimerService) { 
    this.init()
  }
  private init(){
    //Declaration of words
    this.currentWordNum = 0; 
    this.scrollby = 0; 
 
    //Get Random sentences
    this.generateTestText(); 

    //subscribe to users current word
    this.currentWord.subscribe((value)=>{
      this.updateHTMLTextFormat(); 
    });  


  }
  private generatedTestText(_data:string){
    try{

      let sentences = _data.split('\n'); 
      let sentenceCount = sentences.length; 
      let wordcount = 0;  
      let testText = ""; 
  
      while(wordcount < 250){
        testText += sentences[this.randomNumber(0, sentenceCount - 1)].trim().toLocaleLowerCase() + " ";   
        wordcount = testText.split(" ").length; 
      }   
      return testText;

    }catch(e){}
  
    return ""; 
  }
  private generateParagraphWordStateAr(_paragraph: string){

    let words = _paragraph.split(" ");
    let paragraphWordState: {word:string, state:wordState}[] = [];
    for(let i = 0; i < words.length; i++){   
      paragraphWordState.push({word: words[i], state: wordState.Inactive}); 
    }

    return paragraphWordState; 
  }
  
  private updateHTMLTextFormat(){


    console.log(this.currentWordNum); 

    //update color of the current word
    let isMatch = this.checkCurrentStrMarches(this.paragraphWordState[this.currentWordNum].word,this.currentWord.value); 
    if(isMatch){
      this.paragraphWordState[this.currentWordNum].state = wordState.ActiveCorrect;
    }else{
      this.paragraphWordState[this.currentWordNum].state = wordState.ActiveIncorrect; 
    }
    this.textReadyChange.next(true); 

  }
  private randomNumber(_min:number, _max:number){
    return Math.round(Math.random() * (_max - _min) + _min);
  }
  private checkCompletedStrMatch(_word:string, _substrWord:string){
    if(_word === _substrWord){
      return true; 
    }
    return false; 
  }
  private checkCurrentStrMarches(_word:string, _substrWord:string){
    //Check Size
    if(_substrWord.length > _word.length){
      return false; 
    }
    if(_word === _substrWord){
      return true; 
    }
    let wordAr = _word.split(""); 
    let subStrWordAr = _substrWord.split("");
    for(let i = 0; i < subStrWordAr.length; i++){
      if(wordAr[i]!= subStrWordAr[i]){
        return false; 
      }
    }
    return true; 
  }

  private async generateTestText(){
    //Get Random sentences      
    this.subs = this.httpClient.get('assets/data/random.txt', { responseType: 'text' })
    .subscribe(data => {
      this.testText = this.generatedTestText(data)
      this.paragraphWordState = this.generateParagraphWordStateAr(this.testText);
      this.textReadyChange.next(true); 
    });
  }

  private resetTestText(){

    this.currentWordNum = 0; 
    this.scrollby = 0;    
    this.paragraphWordState = []; 
    this.subs.unsubscribe(); 
    
    this.generateTestText(); 
  }
  public moveToNextWord(){
    let wordCorrectness = this.checkCompletedStrMatch(this.paragraphWordState[this.currentWordNum].word, this.currentWord.value); 
    if(wordCorrectness){
      this.paragraphWordState[this.currentWordNum].state = wordState.Correct;
    }else{
      this.paragraphWordState[this.currentWordNum].state = wordState.Incorrect;
    }
  }

  public async resetTest(){

    console.log("----------- Before -----------"); 
    console.log("Array: " +this.paragraphWordState.length); 
    console.log("Word Number: "+this.currentWordNum); 
    console.log("current Word: "+ this.currentWord.value); 

    //Reset Timer
    this.timerService.resetClock(); 
    //Reset all Parts of the testing
    await this.resetTestText(); 

    console.log("----------- After -----------"); 
    console.log("Array: " +this.paragraphWordState.length); 
    console.log("Word Number: "+this.currentWordNum); 
    console.log("current Word: "+ this.currentWord.value); 

    
    this.textReadyChange.next(true); 
  }
  public getTimerServiceInstatiation(){
    return(this.timerService); 
  }

}
