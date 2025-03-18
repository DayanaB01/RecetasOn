import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecetarioComponent } from './modal-recetario.component';

describe('ModalRecetarioComponent', () => {
  let component: ModalRecetarioComponent;
  let fixture: ComponentFixture<ModalRecetarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRecetarioComponent]
    });
    fixture = TestBed.createComponent(ModalRecetarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
