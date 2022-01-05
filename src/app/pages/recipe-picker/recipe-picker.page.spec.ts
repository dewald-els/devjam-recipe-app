import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePickerPage } from './recipe-picker.page';

describe('RecipePickerPage', () => {
  let component: RecipePickerPage;
  let fixture: ComponentFixture<RecipePickerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipePickerPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipePickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
