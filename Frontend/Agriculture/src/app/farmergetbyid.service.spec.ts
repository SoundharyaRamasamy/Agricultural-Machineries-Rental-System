import { TestBed } from '@angular/core/testing';

import { FarmergetbyidService } from './farmergetbyid.service';

describe('FarmergetbyidService', () => {
  let service: FarmergetbyidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmergetbyidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
