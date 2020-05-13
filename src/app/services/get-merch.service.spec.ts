import { TestBed } from '@angular/core/testing';

import { GetMerchService } from './get-merch.service';

describe('GetMerchService', () => {
  let service: GetMerchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMerchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
