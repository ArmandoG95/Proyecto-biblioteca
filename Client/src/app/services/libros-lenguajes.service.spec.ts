import { TestBed } from '@angular/core/testing';

import { LibrosLenguajesService } from './libros-lenguajes.service';

describe('LibrosLenguajesService', () => {
  let service: LibrosLenguajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosLenguajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
