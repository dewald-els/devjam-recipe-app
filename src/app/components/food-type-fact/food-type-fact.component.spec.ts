import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTypeFactComponent } from './food-type-fact.component';

describe('FoodTypeFactComponent', () => {
  let component: FoodTypeFactComponent;
  let fixture: ComponentFixture<FoodTypeFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodTypeFactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTypeFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
