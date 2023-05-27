import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalidadFormComponent } from './nacionalidad-form.component';

describe('NacionalidadFormComponent', () => {
  let component: NacionalidadFormComponent;
  let fixture: ComponentFixture<NacionalidadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacionalidadFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NacionalidadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
