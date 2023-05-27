import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiosListComponent } from './premios-list.component';

describe('PremiosListComponent', () => {
  let component: PremiosListComponent;
  let fixture: ComponentFixture<PremiosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
