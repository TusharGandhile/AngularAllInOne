import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  imgsrc='assets/images/list.jpeg'
  addtask:any[]=[];
addcompletedtask:any=[];
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("myTask")){
      this.addtask=JSON.parse(localStorage.getItem("myTask")!)
    }
    if(localStorage.getItem("completedtask")){
      this.addcompletedtask=JSON.parse(localStorage.getItem("completedtask") !)
    }
    if(this.addtask.length>0){
      this.router.navigate(['/task-board'])
    }
  }

}
