import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTypeCardComponent } from './food-type-card.component';

describe('FoodTypeCardComponent', () => {
  let component: FoodTypeCardComponent;
  let fixture: ComponentFixture<FoodTypeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodTypeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
