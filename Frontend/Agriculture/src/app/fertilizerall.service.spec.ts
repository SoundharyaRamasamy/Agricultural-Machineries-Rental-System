import { TestBed } from '@angular/core/testing';

import { FertilizerallService } from './fertilizerall.service';

describe('FertilizerallService', () => {
  let service: FertilizerallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FertilizerallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
