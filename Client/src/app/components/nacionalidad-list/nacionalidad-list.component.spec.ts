import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalidadListComponent } from './nacionalidad-list.component';

describe('NacionalidadListComponent', () => {
  let component: NacionalidadListComponent;
  let fixture: ComponentFixture<NacionalidadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NacionalidadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NacionalidadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
