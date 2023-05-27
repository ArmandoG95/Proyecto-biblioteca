import { TestBed } from '@angular/core/testing';

import { TiposTapasService } from './tipos-tapas.service';

describe('TiposTapasService', () => {
  let service: TiposTapasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposTapasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
