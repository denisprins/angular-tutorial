import { TestBed } from '@angular/core/testing';

import { CheckService } from './check.service';

describe('CheckServiceService', () => {
  let service: CheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
