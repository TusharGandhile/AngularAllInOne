import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.scss']
})
export class TaskformComponent implements OnInit {
  title='';
  detail='';
  date='';
  tomorrow:any;
  today:any;
  nextweek:any;
  nextmonth:any;
  nextyear:any;
  addtask:any[]=[];
  addtocompleted:any[]=[];

  constructor(private datepipe:DatePipe,private toastr: ToastrService) { }

  ngOnInit(): void {
    // if(localStorage.getItem('completedTask')){
    //   this.addtask= JSON.parse(localStorage.getItem('completedTask')!)
    // }
    // localStorage.setItem('completedTask',JSON.stringify(this.addtocompleted));
   
    if(localStorage.getItem('mytasks')){
   this.addtask= JSON.parse(localStorage.getItem('mytasks')!)
    }
    localStorage.setItem('mytasks',JSON.stringify(this.addtask));
  }

  saveTask(){
    if((document.getElementById('title') as HTMLInputElement).value !=='' &&
    (document.getElementById('detail') as HTMLInputElement).value !==''){
  this.title=(document.getElementById('title') as HTMLInputElement).value;
  this.detail=(document.getElementById('detail') as HTMLInputElement).value;
  this.date=(document.getElementById('curdate') as HTMLInputElement).value;
  

  this.addtask.push({title:this.title,detail:this.detail,date:this.date});
    }
    else{
      alert("All fields are Compulsary.!!");
    }
  localStorage.setItem('mytasks',JSON.stringify(this.addtask));
  (document.getElementById('title') as HTMLInputElement).value='';
  (document.getElementById('detail') as HTMLInputElement).value='';
  (document.getElementById('curdate') as HTMLInputElement).value='';
  this.toastr.success("New Task Added successfully !!", "Task Added!!")
  }

  changeDate(value:any){
   let today=new Date();
    if(value==0){
     this. today = this.datepipe.transform( new Date(),'yyyy-MM-dd');
      console.log(this.today);
      (document.getElementById('curdate') as HTMLInputElement).value=this.today;
    
    }else if(value==1){
      let tomorrow =  new Date()
      tomorrow.setDate(today.getDate() + 1) ;
      this. tomorrow = this.datepipe.transform( tomorrow,'yyyy-MM-dd');
      console.log(this.tomorrow);
      (document.getElementById('curdate') as HTMLInputElement).value=this.tomorrow;
    }else if(value==2){
      let nextweek =  new Date()
     nextweek.setDate(today.getDate() + 7) ;
     this. nextweek = this.datepipe.transform( nextweek,'yyyy-MM-dd');
     console.log(this.nextweek);
     (document.getElementById('curdate') as HTMLInputElement).value=this.nextweek;
    //  (document.getElementById('curdate') as HTMLInputElement).value=tomorrow;
    }else if(value==3){
      let nextmonth =  new Date()
      nextmonth.setDate(today.getDate() + 30) ;
      this. nextmonth = this.datepipe.transform( nextmonth,'yyyy-MM-dd');
      console.log(this.nextmonth);
      (document.getElementById('curdate') as HTMLInputElement).value=this.nextmonth;
     // (document.getElementById('curdate') as HTMLInputElement).value=tomorrow;
    }else if(value==4){
      let nextyear =  new Date()
      nextyear.setDate(today.getDate() + 365); 
      this. nextyear = this.datepipe.transform( nextyear,'yyyy-MM-dd');
      console.log(this.nextyear);
      (document.getElementById('curdate') as HTMLInputElement).value=this.nextyear;
     // (document.getElementById('curdate') as HTMLInputElement).innerHTML=nextyear;
    }

  }
}
