import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemIngredientComponent } from './item-ingredient.component';

describe('ItemIngredientComponent', () => {
  let component: ItemIngredientComponent;
  let fixture: ComponentFixture<ItemIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
