import { TestBed } from '@angular/core/testing';

import { ArtObjectsListService } from './art-objects-list.service';

describe('ArtObjectsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtObjectsListService = TestBed.get(ArtObjectsListService);
    expect(service).toBeTruthy();
  });
});
