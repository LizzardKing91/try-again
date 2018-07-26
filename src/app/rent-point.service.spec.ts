import { TestBed, inject } from '@angular/core/testing';

import { RentPointService } from './rent-point.service';

describe('RentPointService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentPointService]
    });
  });

  it('should be created', inject([RentPointService], (service: RentPointService) => {
    expect(service).toBeTruthy();
  }));
});
