import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTapaListComponent } from './tipo-tapa-list.component';

describe('TipoTapaListComponent', () => {
  let component: TipoTapaListComponent;
  let fixture: ComponentFixture<TipoTapaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoTapaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoTapaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
