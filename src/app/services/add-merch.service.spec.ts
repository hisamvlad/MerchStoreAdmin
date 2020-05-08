import { TestBed } from '@angular/core/testing';

import { AddMerchService } from './add-merch.service';

describe('AddMerchService', () => {
  let service: AddMerchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMerchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
