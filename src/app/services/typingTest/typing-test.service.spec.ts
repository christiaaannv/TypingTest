import { TestBed } from '@angular/core/testing';

import { TypingTestService } from './typing-test.service';

describe('TypingTestService', () => {
  let service: TypingTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypingTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
