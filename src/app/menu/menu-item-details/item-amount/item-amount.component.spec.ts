import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAmountComponent } from './item-amount.component';

describe('ItemAmountComponent', () => {
  let component: ItemAmountComponent;
  let fixture: ComponentFixture<ItemAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
