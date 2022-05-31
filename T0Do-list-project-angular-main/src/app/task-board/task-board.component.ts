import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params,Router } from '@angular/router';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  title:any;
  detail:any;
  date:any;
  isclicked=false;
  isdblclick=true;
  addtask:any[]=[];
  addtocompleted:any[]=[];
  items:any;
  tasks!: { id: string; };
  id:any;
  constructor(private toastr:ToastrService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   
    if(this.addtocompleted==null && this.addtask==null){
      this.router.navigate(['']);
    }
    
    if(localStorage.getItem('completedTask')) {
      this.addtocompleted= JSON.parse(localStorage.getItem('completedTask')!)
    }
   // localStorage.setItem('completedTask',JSON.stringify(this.addtocompleted));

    if(localStorage.getItem('mytasks')){
      this.addtask= JSON.parse(localStorage.getItem('mytasks')!)
    }
    localStorage.setItem('mytasks',JSON.stringify(this.addtask));

    this.route.paramMap.subscribe(res=>{
      console.log(res);
    })

   
    
  }

  completedTask(){
    this.isclicked=true;
    this.isdblclick=false;
    console.log("clicked");

   // this.isclicked=false;
  }
  deleteTask(index: number){
    var result = confirm("Do Want to delete the task ??");
    if (result) {
         this.addtask.splice(index,1);
         this.toastr.error("Task Deleted", "Task Deleted Successfully.!!")
    }
    localStorage.setItem('mytasks',JSON.stringify(this.addtask));
    
    
  }
  addToCompleted(index: number){

    this.title=this.addtask[index].title;
    this.detail=this.addtask[index].detail;
    this.date=this.addtask[index].date;
  
    this.addtocompleted.push({title:this.title,detail:this.detail,date:this.date})
    localStorage.setItem('completedTask',JSON.stringify(this.addtocompleted));
    this.addtask.splice(index,1);
    localStorage.setItem('mytasks',JSON.stringify(this.addtask));
    localStorage.setItem('completedTask',JSON.stringify(this.addtocompleted));

    this.toastr.success("Task Completed successfully !!", "Task Completed successfully !!")
  }
  
  deletePermanantly(index: any){
      var result = confirm("Task Will Permanantly Deleted.!!");
      if (result) {
      this.addtocompleted.splice(index,1);
      this.toastr.error("Task Deleted Permanantly.", "Task Deleted.!!");
      this.isclicked=false;
      this.isdblclick=true;
      }
      localStorage.setItem('completedTask',JSON.stringify(this.addtocompleted));
      this.items=this.addtocompleted.length;
     
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.addtask, event.previousIndex, event.currentIndex);

    localStorage.setItem('mytasks',JSON.stringify(this.addtask));
  }
  cancleTask(){
    this.isclicked=false;
    this.isdblclick=true;
  }
  editTask(){
   console.log("it works")
  }
}
