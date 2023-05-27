import { TestBed } from '@angular/core/testing';

import { PremiosAutoresService } from './premios-autores.service';

describe('PremiosAutoresService', () => {
  let service: PremiosAutoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremiosAutoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
