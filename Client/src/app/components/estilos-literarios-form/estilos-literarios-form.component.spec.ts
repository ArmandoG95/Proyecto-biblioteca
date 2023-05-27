import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilosLiterariosFormComponent } from './estilos-literarios-form.component';

describe('EstilosLiterariosFormComponent', () => {
  let component: EstilosLiterariosFormComponent;
  let fixture: ComponentFixture<EstilosLiterariosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstilosLiterariosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstilosLiterariosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
