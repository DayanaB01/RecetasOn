import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsRecipeComponent } from './edits-recipe.component';

describe('EditsRecipeComponent', () => {
  let component: EditsRecipeComponent;
  let fixture: ComponentFixture<EditsRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditsRecipeComponent]
    });
    fixture = TestBed.createComponent(EditsRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
