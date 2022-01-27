import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownDashComponent } from './count-down-dash.component';

describe('CountDownDashComponent', () => {
  let component: CountDownDashComponent;
  let fixture: ComponentFixture<CountDownDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
