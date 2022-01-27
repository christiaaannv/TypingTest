import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTypingtestUserInputComponent } from './count-down-typingtest-user-input.component';

describe('CountDownTypingtestUserInputComponent', () => {
  let component: CountDownTypingtestUserInputComponent;
  let fixture: ComponentFixture<CountDownTypingtestUserInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTypingtestUserInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTypingtestUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
