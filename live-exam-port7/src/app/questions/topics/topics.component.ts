import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  token:any;
  searchText:any;
  topiclist:any=[];
  page:number=1;
  noOfTopics=5;
  totalLength:any
  addTopic!:FormGroup;
  show=false;
  subjectdata:any=[]
  topicURL='http://admin.liveexamcenter.in/api/topics';
  subjectURL='http://admin.liveexamcenter.in/api/subjects?page=1&limit=47&term=';
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.addTopic=new FormGroup({
      'subject':new FormControl(null,Validators.required),
      'topic':new FormControl(null,Validators.required)
    })
    localStorage.setItem('noOfTopics',JSON.stringify(this.noOfTopics))
    if(localStorage.getItem('noOfTopics')){
      this.noOfTopics=JSON.parse(localStorage.getItem('noOfTopics')!)
    }
    if(localStorage.getItem('token')){
      this.token=JSON.parse(localStorage.getItem('token')!)
      console.log(this.token);
      
    }
    const headers={headers:{"Authorization":this.token}}
this.http.get<any>('https://admin.liveexamcenter.in/api/topics?page=1&limit=100&term=',headers).subscribe((res:any)=>{
  console.log(res);
  this.topiclist=res.result
  this.totalLength=this.topiclist.length;

});
  }
changeNo(value:any){
  this.noOfTopics=value;
  localStorage.setItem('noOfTopics',JSON.stringify(this.noOfTopics))
}
addtopic(){
//console.log(this.addTopic.value);
let data={name:this.addTopic.value.topic,subject:this.addTopic.value.subject}
console.log(data);
this.http.post<any>('http://admin.liveexamcenter.in/api/topics',data,{headers:{"Authorization":this.token}}).subscribe((data:any)=>{ 
  console.log(data);
  this.ngOnInit();
});

}
checksub(sub:any){
console.log(sub);

}
showSubject(){
this.http.get<any>( this.subjectURL,{headers:{"Authorization":this.token}}).subscribe((data:any)=>{
console.log(data);
this.subjectdata=data.result;

})
  
}
selectSubject(sub:any){
  console.log(sub);
  
}
}
