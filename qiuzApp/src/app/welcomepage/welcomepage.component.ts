import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})


export class WelcomepageComponent implements OnInit {

  @ViewChild('name')nameKey!:ElementRef;
  //public name="";
  constructor() { }

  ngOnInit(): void {
  }

  startQuiz(){
    localStorage.setItem('name',this.nameKey.nativeElement.value);
  }
}
