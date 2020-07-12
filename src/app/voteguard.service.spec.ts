import { TestBed } from '@angular/core/testing';

import { VoteguardService } from './voteguard.service';

describe('VoteguardService', () => {
  let service: VoteguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoteguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
