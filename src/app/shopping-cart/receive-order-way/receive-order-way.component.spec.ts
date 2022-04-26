import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveOrderWayComponent } from './receive-order-way.component';

describe('ReceiveOrderWayComponent', () => {
  let component: ReceiveOrderWayComponent;
  let fixture: ComponentFixture<ReceiveOrderWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveOrderWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveOrderWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
