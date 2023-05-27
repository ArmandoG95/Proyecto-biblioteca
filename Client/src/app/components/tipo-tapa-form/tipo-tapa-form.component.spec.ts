import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTapaFormComponent } from './tipo-tapa-form.component';

describe('TipoTapaFormComponent', () => {
  let component: TipoTapaFormComponent;
  let fixture: ComponentFixture<TipoTapaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoTapaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoTapaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
