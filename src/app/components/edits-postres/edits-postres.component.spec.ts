import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsPostresComponent } from './edits-postres.component';

describe('EditsPostresComponent', () => {
  let component: EditsPostresComponent;
  let fixture: ComponentFixture<EditsPostresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditsPostresComponent]
    });
    fixture = TestBed.createComponent(EditsPostresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
