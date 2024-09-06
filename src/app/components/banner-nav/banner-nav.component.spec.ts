import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNavComponent } from './banner-nav.component';

describe('BannerNavComponent', () => {
  let component: BannerNavComponent;
  let fixture: ComponentFixture<BannerNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerNavComponent]
    });
    fixture = TestBed.createComponent(BannerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
