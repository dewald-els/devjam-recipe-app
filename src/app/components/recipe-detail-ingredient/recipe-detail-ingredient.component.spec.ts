import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailIngredientComponent } from './recipe-detail-ingredient.component';

describe('RecipeDetailIngredientComponent', () => {
  let component: RecipeDetailIngredientComponent;
  let fixture: ComponentFixture<RecipeDetailIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
