import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscortComponent } from './escort.component';

describe('EscortComponent', () => {
  let component: EscortComponent;
  let fixture: ComponentFixture<EscortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
