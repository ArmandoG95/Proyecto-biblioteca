import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosLiterariosFormComponent } from './generos-literarios-form.component';

describe('GenerosLiterariosFormComponent', () => {
  let component: GenerosLiterariosFormComponent;
  let fixture: ComponentFixture<GenerosLiterariosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerosLiterariosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerosLiterariosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
