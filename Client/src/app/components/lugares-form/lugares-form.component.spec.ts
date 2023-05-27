import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresFormComponent } from './lugares-form.component';

describe('LugaresFormComponent', () => {
  let component: LugaresFormComponent;
  let fixture: ComponentFixture<LugaresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugaresFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugaresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
