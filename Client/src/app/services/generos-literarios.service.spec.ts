import { TestBed } from '@angular/core/testing';

import { GenerosLiterariosService } from './generos-literarios.service';

describe('GenerosLiterariosService', () => {
  let service: GenerosLiterariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerosLiterariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
