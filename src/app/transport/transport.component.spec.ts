import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transport } from './transport.component';

describe('Transport', () => {
  let component: Transport;
  let fixture: ComponentFixture<Transport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Transport ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Transport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
