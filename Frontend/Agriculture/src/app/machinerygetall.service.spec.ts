import { TestBed } from '@angular/core/testing';

import { MachinerygetallService } from './machinerygetall.service';

describe('MachinerygetallService', () => {
  let service: MachinerygetallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachinerygetallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
