import { TestBed } from '@angular/core/testing';

import { EstilosLiterariosService } from './estilos-literarios.service';

describe('EstilosLiterariosService', () => {
  let service: EstilosLiterariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstilosLiterariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
