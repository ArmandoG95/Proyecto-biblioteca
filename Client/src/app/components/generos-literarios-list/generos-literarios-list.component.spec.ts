import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosLiterariosListComponent } from './generos-literarios-list.component';

describe('GenerosLiterariosListComponent', () => {
  let component: GenerosLiterariosListComponent;
  let fixture: ComponentFixture<GenerosLiterariosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerosLiterariosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerosLiterariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
