import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrls: ['./com2.component.scss']
})

export class Com2Component implements OnInit {
  myName! :string; 
  @Output() sendChildValue: EventEmitter<string> = new EventEmitter<string>();
  childValue!: string;
  constructor(private auth:SubjectService) { }

  ngOnInit(): void {
  
    this.auth.stringSubject.subscribe(
      data => 
      {
        this.myName = data;
       console.log('next subscribed value: ' + data);
      }
    );
  }
  

  sendValueToParent() {
    this.sendChildValue.emit(this.childValue);
  }
}
