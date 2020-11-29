import { TestBed } from '@angular/core/testing';

import { ReservationsServiceService } from './reservations-service.service';

describe('ReservationsServiceService', () => {
  let service: ReservationsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
