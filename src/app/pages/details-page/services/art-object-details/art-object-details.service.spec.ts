import { TestBed } from '@angular/core/testing';

import { ArtObjectDetailsService } from './art-object-details.service';

describe('ArtObjectDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtObjectDetailsService = TestBed.get(ArtObjectDetailsService);
    expect(service).toBeTruthy();
  });
});
