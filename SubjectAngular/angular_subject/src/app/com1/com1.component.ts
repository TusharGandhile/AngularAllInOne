import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-com1',
  templateUrl: './com1.component.html',
  styleUrls: ['./com1.component.scss']
})
export class Com1Component implements OnInit {
myName!:string;
@Input() item = 'nfggfdhdfhfd';
  constructor(private auth:SubjectService,private router:Router) { }

  ngOnInit(): void {
  }
sendcom2(){
  console.log(this.myName);
  this.auth.passval(this.myName);
  this.router.navigate(['com2']);
}
}
