import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  taskcompleted:any[]=[];
  listdisplay=false;
  addtask:any[]=[];
  constructor(private toastr:ToastrService) { }
  task:any;

  ngOnInit(): void {
    if(localStorage.getItem("myTask")){
      this.addtask=JSON.parse(localStorage.getItem("myTask")!)
    }
    if(localStorage.getItem("completedtask")){
      this.taskcompleted=JSON.parse(localStorage.getItem("completedtask") !)
      this.task=this.taskcompleted.length
    }

  }
  onclickcompleted(){
    this.taskcompleted=JSON.parse(localStorage.getItem("completedtask") !)
    this.task=this.taskcompleted.length
    if(this.listdisplay!=true){
    this.listdisplay=true;
    
    }else{
      this.listdisplay=false;
    }
  }
  
  deleteNote(index:number){
    
    if (confirm("Entry will permanantly deleted !") ){
      this.taskcompleted.splice(index,1);
      localStorage.setItem('completedtask',JSON.stringify(this.taskcompleted));
      this.task=this.taskcompleted.length
      console.log(this.taskcompleted)
      this.toastr.error("Task Deleted", "Task Deleted Successfully!!")
    } 
    

    
  }
}
