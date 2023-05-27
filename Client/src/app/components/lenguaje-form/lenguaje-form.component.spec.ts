import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajeFormComponent } from './lenguaje-form.component';

describe('LenguajeFormComponent', () => {
  let component: LenguajeFormComponent;
  let fixture: ComponentFixture<LenguajeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenguajeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenguajeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
