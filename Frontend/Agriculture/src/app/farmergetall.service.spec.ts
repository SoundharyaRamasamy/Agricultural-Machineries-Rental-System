import { TestBed } from '@angular/core/testing';

import { FarmergetallService } from './farmergetall.service';

describe('FarmergetallService', () => {
  let service: FarmergetallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmergetallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
