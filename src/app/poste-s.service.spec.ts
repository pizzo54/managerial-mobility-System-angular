import { TestBed } from '@angular/core/testing';

import { PosteSService } from './poste-s.service';

describe('PosteSService', () => {
  let service: PosteSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosteSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
