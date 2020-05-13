import { TestBed } from '@angular/core/testing';

import { GetMerchListService } from './get-merch-list.service';

describe('GetMerchListService', () => {
  let service: GetMerchListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMerchListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
