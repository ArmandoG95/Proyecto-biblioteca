import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiosAutoresListComponent } from './premios-autores-list.component';

describe('PremiosAutoresListComponent', () => {
  let component: PremiosAutoresListComponent;
  let fixture: ComponentFixture<PremiosAutoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiosAutoresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiosAutoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
