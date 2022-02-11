import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTypingDashComponent } from './count-down-typing-dash.component';

describe('CountDownTypingDashComponent', () => {
  let component: CountDownTypingDashComponent;
  let fixture: ComponentFixture<CountDownTypingDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTypingDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTypingDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
