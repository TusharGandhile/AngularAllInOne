import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  formdata: any = [];
  arr:any=[]
  constructor(private router:Router) { }
totalex=0;
  ngOnInit(): void {
    if (localStorage.getItem('formvalue')) {
      this.formdata = JSON.parse(localStorage.getItem('formvalue')!)
      console.log(this.formdata);
for(let i =0;i<this.formdata.length;i++){
  this.totalex=0
  for (let j = 0; j < this.formdata[i].experience.length; j++) {
    this.totalex+=this.formdata[i].experience[j].duration
    
  }
  this.arr.push(this.totalex)
}
    }
  }
  Editcandidate(id:any) {
    this.router.navigate(['editCandidate',id])
  }
  Deletecandidate(id:any) {
    this.formdata.splice(id, 1);
    localStorage.setItem('formvalue', JSON.stringify(this.formdata));
  }
}
