import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiosAutoresFormComponent } from './premios-autores-form.component';

describe('PremiosAutoresFormComponent', () => {
  let component: PremiosAutoresFormComponent;
  let fixture: ComponentFixture<PremiosAutoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiosAutoresFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiosAutoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
