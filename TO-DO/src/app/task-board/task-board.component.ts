import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop,moveItemInArray} from '@angular/cdk/drag-drop';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {

  constructor(private router:Router, private toastr:ToastrService) { }
  isShow=true;
addtask:any[]=[];
addcompletedtask:any=[];
  ngOnInit(): void {
    if(localStorage.getItem("myTask")){
      this.addtask=JSON.parse(localStorage.getItem("myTask")!)
    }
    if(localStorage.getItem("completedtask")){
      this.addcompletedtask=JSON.parse(localStorage.getItem("completedtask") !)
      console.log(this.addcompletedtask)
    }
    if(this.addtask.length==0){
      this.router.navigate(['/welcome'])
    }
  }

  deleteNote(index:number){
   
    if (confirm("Are you sure to delete task !") ){
      this.addtask.splice(index,1);
      this.toastr.error("Task Deleted", "Task Deleted Successfully!!")
    } 
    localStorage.setItem('myTask',JSON.stringify(this.addtask));
  
this.ngOnInit()
  }
  // editNote(title:any){
  //   this.router.navigate(['/note-page',this.addtask])
  // }
  taskCompleted(index:number){

    this.ngOnInit()
    
    this.addcompletedtask.push(this.addtask[index]);
    localStorage.setItem('completedtask',JSON.stringify(this.addcompletedtask));
    console.log(this.addcompletedtask);
    this.isShow=false;
    
    this.addtask.splice(index,1);
    localStorage.setItem('myTask',JSON.stringify(this.addtask));
    window.location.reload()
    

   }
   drop( event: CdkDragDrop<string[]>) {
    moveItemInArray(this.addtask, event.previousIndex, event.currentIndex);
    localStorage.setItem('myTask',JSON.stringify(this.addtask));
  }

  update(i:any){
    this.router.navigate(['edit-note/',i])

  }




  
}
