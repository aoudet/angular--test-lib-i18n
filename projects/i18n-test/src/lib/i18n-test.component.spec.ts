import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nTestComponent } from './i18n-test.component';

describe('I18nTestComponent', () => {
  let component: I18nTestComponent;
  let fixture: ComponentFixture<I18nTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I18nTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I18nTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
