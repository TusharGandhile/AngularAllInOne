import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
 
 public stringSubject = new ReplaySubject<any>(1);
//stringSubject = new EventEmitter<string>();
  constructor() {  }

  passval(data:string){
    console.log(data);
    this.stringSubject.next(data);
  }

}
