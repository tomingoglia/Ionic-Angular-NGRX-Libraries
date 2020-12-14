import { TestBed } from '@angular/core/testing';

import { UsfListService } from './usf-list.service';

describe('UsfListService', () => {
  let service: UsfListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsfListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
