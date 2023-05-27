import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Libros2ListComponent } from './libros2-list.component';

describe('Libros2ListComponent', () => {
  let component: Libros2ListComponent;
  let fixture: ComponentFixture<Libros2ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Libros2ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Libros2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
