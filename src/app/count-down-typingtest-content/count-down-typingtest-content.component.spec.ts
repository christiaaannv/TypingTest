import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTypingtestContentComponent } from './count-down-typingtest-content.component';

describe('CountDownTypingtestContentComponent', () => {
  let component: CountDownTypingtestContentComponent;
  let fixture: ComponentFixture<CountDownTypingtestContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTypingtestContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTypingtestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
