import { TestBed } from '@angular/core/testing';

import { Libros2Service } from './libros2.service';

describe('Libros2Service', () => {
  let service: Libros2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Libros2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
