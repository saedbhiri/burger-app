import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWeightComponent } from './item-weight.component';

describe('ItemWeightComponent', () => {
  let component: ItemWeightComponent;
  let fixture: ComponentFixture<ItemWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemWeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
