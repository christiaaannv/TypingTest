import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field'; 
import { CountDownDashComponent } from './count-down-dash/count-down-dash.component';
import { CountDownTypingDashComponent } from './count-down-typing-dash/count-down-typing-dash.component';
import { CountDownTypingtestContentComponent } from './count-down-typingtest-content/count-down-typingtest-content.component';
import { CountDownTypingtestUserInputComponent } from './count-down-typingtest-user-input/count-down-typingtest-user-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HttpClientModule } from  '@angular/common/http';
import {MatIconModule} from '@angular/material/icon'
import { TimerService } from './services/timerService/timer.service';
import { TypingTestService } from './services/typingTest/typing-test.service';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    CountDownDashComponent,
    CountDownTypingDashComponent,
    CountDownTypingtestContentComponent,
    CountDownTypingtestUserInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    ScrollingModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
