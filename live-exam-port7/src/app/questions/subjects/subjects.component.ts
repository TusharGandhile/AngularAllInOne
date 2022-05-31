import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  addSub!:FormGroup;
  token:any;
searchText:any;
sublist:any=[];
page:number=1;
noOfSubjects=5;
totalLength:any;
close=false;
subjectURL='http://admin.liveexamcenter.in/api/subjects';
  constructor(private http:HttpClient,private router:Router,private formbuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.addSub=this.formbuilder.group({
      subject:[''],
      
    })
    this.addSub=new FormGroup({
      'subject':new FormControl(null,Validators.required),
    //  'name':new FormControl(null,Validators.required)
    })


    localStorage.setItem('noOfSubjects',JSON.stringify(this.noOfSubjects))
    if(localStorage.getItem('noOfSubjects')){
      this.noOfSubjects=JSON.parse(localStorage.getItem('noOfSubjects')!)
    }
    if(localStorage.getItem('token')){
      this.token=JSON.parse(localStorage.getItem('token')!)
      console.log(this.token);
      
    }
    const headers={headers:{"Authorization":this.token}}
this.http.get<any>('http://admin.liveexamcenter.in/api/subjects?page=1&limit=47&term=',headers).subscribe((res:any)=>{
  console.log(res);
  this.sublist=res.result
  this.totalLength=this.sublist.length;

});
  }
changeNo(value:any){
  this.noOfSubjects=value;
  localStorage.setItem('noOfSubjects',JSON.stringify(this.noOfSubjects))
}
addSubject(){
  let name={name:this.addSub.value.subject};
    console.log(this.addSub.value.subject);
    
  this.http.post<any>(this.subjectURL,name,{headers:{"Authorization":this.token}}).subscribe((data:any)=>{ 
    console.log(data);
    this.ngOnInit();
  });
  
  
  
}

}
