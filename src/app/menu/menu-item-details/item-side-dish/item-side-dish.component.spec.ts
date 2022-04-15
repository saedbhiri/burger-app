import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSideDishComponent } from './item-side-dish.component';

describe('ItemSideDishComponent', () => {
  let component: ItemSideDishComponent;
  let fixture: ComponentFixture<ItemSideDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSideDishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSideDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
