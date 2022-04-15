import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSauceComponent } from './item-sauce.component';

describe('ItemSauceComponent', () => {
  let component: ItemSauceComponent;
  let fixture: ComponentFixture<ItemSauceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSauceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSauceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
