import { TestBed } from '@angular/core/testing';

import { FertilizergetallService } from './fertilizergetall.service';

describe('FertilizergetallService', () => {
  let service: FertilizergetallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FertilizergetallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
