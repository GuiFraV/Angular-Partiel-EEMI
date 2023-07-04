import { TestBed } from '@angular/core/testing';

import { ApiJikanService } from './api-jikan.service';

describe('ApiJikanService', () => {
  let service: ApiJikanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiJikanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
