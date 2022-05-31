import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DatePipe} from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss']
})
export class NotePageComponent implements OnInit {

 // this.myTask = (<HTMLInputElement>document.getElementById("title")).value;

public title='';
public detail='';
public date='';
task:any[]=[];
public myDate:any;
public dates:any;
// taskadded=true;
// anotheradded=false;
latest_date:any;
  constructor(public datepipe: DatePipe, private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
if(localStorage.getItem("myTask")){
  this.task=JSON.parse(localStorage.getItem("myTask")!)
}

    //JSON.parse(localStorage.getItem('myTask')!);
    
  }
  
  addNote(){
  //  this.taskadded=false;
  //  this.anotheradded=true;
   console.log('done');
    this.title=(document.getElementById('title')as HTMLInputElement).value;
    this.detail=(document.getElementById('detail')as HTMLInputElement).value;
    this.date=(document.getElementById('newdate')as HTMLInputElement).value;

    if(this.title!='' && this.detail!='' && this.date!=''){
    this.task.push({title:this.title,detail:this.detail,date:this.date});
    localStorage.setItem('myTask',JSON.stringify(this.task));
    this.router.navigate(['/task-board']);
    this.toastr.success("Task Added successfully !!", "New Task!!")
  }else{
    
    alert("Empty fields are not Allowed!!");
    this.ngOnInit()
    
  }
    console.log(this.task);

    
  

    // for(let i=0;i<this.task.length;i++){
    //   console.log(this.task[i].title);
    //   console.log(this.task[i].detail);
    //   console.log(this.task[i].date);
      //}
      
  }
  // todaydate(){
   
  // }
  // tomorrow(){
  
  // }
  // nextWeek(){
    
  // }
  // nextMonth(){
  //   const today =  new Date();
  //   const nextmonth= new Date(today.setDate(today.getDate() + 30));
  // }
  changedate(value: any){
    const today =  new Date();
   if(value==0){
    this.latest_date =this.datepipe.transform(today, 'yyyy-MM-dd');
    (document.getElementById('newdate') as HTMLInputElement).value= this.latest_date
    console.log(this.latest_date);
   }
   else if(value==1){
   
    const tomorrow =  new Date(today.setDate(today.getDate() + 1));
   this.latest_date =this.datepipe.transform(tomorrow, 'yyyy-MM-dd');
   (document.getElementById('newdate') as HTMLInputElement).value= this.latest_date
    console.log(this.latest_date);
   }else if(value==2){
    
    const nextweek= new Date(today.setDate(today.getDate() + 7));
    this.latest_date =this.datepipe.transform(nextweek, 'yyyy-MM-dd');
    (document.getElementById('newdate') as HTMLInputElement).value= this.latest_date
    console.log(this.latest_date);
   }else if(value==3){
    
    const nextmonth= new Date(today.setDate(today.getDate() + 30));
     this.latest_date =this.datepipe.transform(nextmonth, 'yyyy-MM-dd');
     (document.getElementById('newdate') as HTMLInputElement).value= this.latest_date
    console.log(this.latest_date);
   }

 }
}