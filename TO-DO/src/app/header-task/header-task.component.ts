import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-task',
  templateUrl: './header-task.component.html',
  styleUrls: ['./header-task.component.scss']
})
export class HeaderTaskComponent implements OnInit {
imgsrc='assets/images/listicon2.png';
addtask:any[]=[];
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("myTask")){
      this.addtask=JSON.parse(localStorage.getItem("myTask")!)
    }
  }

  searchByName(){
    for(let i=0;i<this.addtask.length;i++){
     console.log(this.addtask[i].title);
     
      }
    }

  }

