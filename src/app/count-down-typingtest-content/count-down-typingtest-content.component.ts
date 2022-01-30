import { Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TypingTestService } from '../services/typingTest/typing-test.service';

@Component({
  selector: 'app-count-down-typingtest-content',
  templateUrl: './count-down-typingtest-content.component.html',
  styleUrls: ['./count-down-typingtest-content.component.css'],
})

export class CountDownTypingtestContentComponent implements OnInit {

  @ViewChild('scrollview', {static: true}) public  scrollElement: ElementRef<HTMLElement>; 
  public text; 

  @ViewChildren('words') private spans: QueryList<ElementRef>; 

  private textArea_offsetWidth_tracker: number; 


  constructor(public typingTestService: TypingTestService) {}

  public updateVerticalScrollLocation(_amount: number){

    let parent = this.scrollElement.nativeElement.offsetWidth; 
    let child_offsetLeft = this.spans.get(this.typingTestService.currentWordNum)!.nativeElement.offsetLeft; 
    let child_offsetTop = this.spans.get(this.typingTestService.currentWordNum)!.nativeElement.offsetTop; 

    //Regular Movement
    if(this.textArea_offsetWidth_tracker > child_offsetLeft && child_offsetTop > 24){
      this.scrollElement.nativeElement.scrollTop += 20; 
    }
    this.textArea_offsetWidth_tracker = child_offsetLeft; 
  }
  ngOnInit(): void {

    this.textArea_offsetWidth_tracker = 0; 

    this.typingTestService.textReadyChange.subscribe((value) =>{
        this.updateVerticalScrollLocation(this.typingTestService.scrollby); 
    }); 


  }

}