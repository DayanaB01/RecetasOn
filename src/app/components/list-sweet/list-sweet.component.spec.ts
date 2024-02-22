import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSweetComponent } from './list-sweet.component';

describe('ListSweetComponent', () => {
  let component: ListSweetComponent;
  let fixture: ComponentFixture<ListSweetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSweetComponent]
    });
    fixture = TestBed.createComponent(ListSweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
