import { TestBed } from '@angular/core/testing';

import { AdminguardianService } from './adminguardian.service';

describe('AdminguardianService', () => {
  let service: AdminguardianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminguardianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
