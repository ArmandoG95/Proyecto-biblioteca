import { TestBed } from '@angular/core/testing';

import { LenguajesBoyceService } from './lenguajes-boyce.service';

describe('LenguajesBoyceService', () => {
  let service: LenguajesBoyceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LenguajesBoyceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
