import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateSelectedStateService {
  private subjectState = new Subject<any>();

  constructor() { }

  setSelectedState(text: string) {
    this.subjectState.next({selectedState: text});
  }

  getSelectedState(): Observable<any> {
    return this.subjectState.asObservable();
  }
}
