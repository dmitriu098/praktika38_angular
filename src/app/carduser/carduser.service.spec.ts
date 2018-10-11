import { TestBed } from '@angular/core/testing';

import { CarduserService } from './carduser.service';

describe('CarduserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarduserService = TestBed.get(CarduserService);
    expect(service).toBeTruthy();
  });
});
