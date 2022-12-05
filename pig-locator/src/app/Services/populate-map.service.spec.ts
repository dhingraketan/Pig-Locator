import { TestBed } from '@angular/core/testing';

import { PopulateMapService } from './populate-map.service';

describe('PopulateMapService', () => {
  let service: PopulateMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopulateMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
