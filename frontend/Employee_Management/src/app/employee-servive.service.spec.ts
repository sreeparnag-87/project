import { TestBed } from '@angular/core/testing';

import { EmployeeServiveService } from './employee-servive.service';

describe('EmployeeServiveService', () => {
  let service: EmployeeServiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeServiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
