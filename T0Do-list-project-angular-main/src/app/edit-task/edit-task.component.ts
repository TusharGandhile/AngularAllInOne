import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  
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
  
  tasks!: { id: string; };
  constructor(private route:ActivatedRoute,private datepipe:DatePipe,private toastr: ToastrService) { }

  ngOnInit(): void {
   // this.tasks={id: this.route.snapshot.params['id']}
   console.log(this.route.snapshot.paramMap.get('id'));
  }

  updateTask(){
    this.title=(document.getElementById('title') as HTMLInputElement).value;
    this.detail=(document.getElementById('detail') as HTMLInputElement).value;
    this.date=(document.getElementById('curdate') as HTMLInputElement).value;
    
  
    this.addtask.push({title:this.title,detail:this.detail,date:this.date});
    
    localStorage.setItem('mytasks',JSON.stringify(this.addtask));
    (document.getElementById('title') as HTMLInputElement).value='';
    (document.getElementById('detail') as HTMLInputElement).value='';
    (document.getElementById('curdate') as HTMLInputElement).value='';
    this.toastr.success("Task updated successfully !!", "Task Edited!!")
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
