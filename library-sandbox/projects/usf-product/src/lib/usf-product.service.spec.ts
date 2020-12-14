import { TestBed } from '@angular/core/testing';

import { UsfProductService } from './usf-product.service';

describe('UsfProductService', () => {
  let service: UsfProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsfProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
