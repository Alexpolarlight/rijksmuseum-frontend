import { TestBed } from '@angular/core/testing';

import { DetailsStateService } from './details-state.service';

describe('DetailsStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsStateService = TestBed.get(DetailsStateService);
    expect(service).toBeTruthy();
  });
});
