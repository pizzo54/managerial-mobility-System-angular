import { TestBed } from '@angular/core/testing';

import { CandidatureSService } from './candidature-s.service';

describe('CandidatureSService', () => {
  let service: CandidatureSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatureSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
