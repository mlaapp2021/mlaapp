import { TestBed } from '@angular/core/testing';

import { PersistIssueDataService } from './persist-issue-data.service';

describe('PersistIssueDataService', () => {
  let service: PersistIssueDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersistIssueDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
