import { TestBed } from '@angular/core/testing';

import { UpdateSelectedStateService } from './update-selected-state.service';

describe('UpdateSelectedStateService', () => {
  let service: UpdateSelectedStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSelectedStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
