import { TestBed } from '@angular/core/testing';

import { InformationDialogPresenterService } from './information-dialog-presenter.service';

describe('InformationDialogPresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformationDialogPresenterService = TestBed.get(InformationDialogPresenterService);
    expect(service).toBeTruthy();
  });
});
