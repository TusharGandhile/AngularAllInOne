import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }
  public stringSubject = new ReplaySubject<string>();

  passValue(data:any) {
    //passing the data as the next observable
    this.stringSubject.next(data);
  }

}
