import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistIssueDataService {
  constructor() {}

  saveData(username: any, location: any, issueDescription: any): boolean {
    return true;
  }
}
