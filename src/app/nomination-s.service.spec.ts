import { TestBed } from '@angular/core/testing';

import { NominationSService } from './nomination-s.service';

describe('NominationSService', () => {
  let service: NominationSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NominationSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
