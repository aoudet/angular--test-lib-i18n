import { TestBed } from '@angular/core/testing';

import { I18nTestService } from './i18n-test.service';

describe('I18nTestService', () => {
  let service: I18nTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
