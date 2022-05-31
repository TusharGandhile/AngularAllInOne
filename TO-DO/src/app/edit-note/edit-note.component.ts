import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  edit!: { id: string; };
  nid:any
  addtask:any=[]
  naddtask:any;
  title='';
  detail='';
  date='';
  taskadded=true;
  anotheradded=false;
  latest_date:any;
  
  constructor(private route: ActivatedRoute ,private datepipe:DatePipe,private toastr:ToastrService ) { }

  ngOnInit(): void {
   
      if(localStorage.getItem("myTask")){
        this.addtask=JSON.parse(localStorage.getItem("myTask")!)
        
      }
    
    this.route.params.subscribe((data) => {
     console.log(data);
      this.nid=data;
    
      console.log(this.addtask[this.nid.id]);
     this.naddtask=this.addtask[this.nid.id];

     
      // (document.getElementById('date') as HTMLInputElement).value = this.naddtask.date;
    })
  }

  updateNote(){
    this.taskadded=false;
   this.anotheradded=true;

   this.title=(document.getElementById('title')as HTMLInputElement).value;
   this.detail=(document.getElementById('detail')as HTMLInputElement).value;
   this.date=(document.getElementById('newdate')as HTMLInputElement).value;

   this.addtask[this.nid.id]={title:this.title,detail:this.detail,date:this.date};
   localStorage.setItem('myTask',JSON.stringify(this.addtask))
   console.log(this.addtask[this.nid.id]);

   this.toastr.success("Task updated successfully", "Updated Successfully!!")
  }
  changedate(value: any){

   
    const today =  new Date();
   if(value==0){
    
    
    this.latest_date =this.datepipe.transform(today, 'yyyy-MM-dd');
    (
      document.getElementById('newdate') as HTMLInputElement).value= this.latest_date
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
