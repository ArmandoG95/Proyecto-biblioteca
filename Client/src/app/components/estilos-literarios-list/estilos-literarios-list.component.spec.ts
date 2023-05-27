import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilosLiterariosListComponent } from './estilos-literarios-list.component';

describe('EstilosLiterariosListComponent', () => {
  let component: EstilosLiterariosListComponent;
  let fixture: ComponentFixture<EstilosLiterariosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstilosLiterariosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstilosLiterariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
