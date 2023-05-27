import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Libros2FormComponent } from './libros2-form.component';

describe('Libros2FormComponent', () => {
  let component: Libros2FormComponent;
  let fixture: ComponentFixture<Libros2FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Libros2FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Libros2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
