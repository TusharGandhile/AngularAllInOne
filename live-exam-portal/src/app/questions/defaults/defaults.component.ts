import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaults',
  templateUrl: './defaults.component.html',
  styleUrls: ['./defaults.component.scss']
})
export class DefaultsComponent implements OnInit {
token:any
response:any=[];
questions:any=[];
option:any=[];
once:any=[];
page:number=1;
no=20;
searchText:any;
  constructor(private http:HttpClient) { }
totalLength:any;
  ngOnInit(): void {
    localStorage.setItem('number',JSON.stringify(this.no))
    if(localStorage.getItem('number')){
      this.no=JSON.parse(localStorage.getItem('number')!)
    }
    if(localStorage.getItem('token')){
      this.token=JSON.parse(localStorage.getItem('token')!)
      console.log(this.token);
      
    }
    const headers={headers:{"Authorization":this.token}}
this.http.get<any>('http://admin.liveexamcenter.in/api/questions?page=1&limit=20&term=&topic=',headers).subscribe((res:any)=>{
  console.log(res);

  this.response=res.result;
  console.log(this.response);
  this.totalLength=this.response.length;
  for(let i=0;i<this.response.length;i++){
    this.questions=this.response[i];
    this.option=this.questions.options
    console.log(this.option);
    for(let j=0;j<this.option.length;j++){
    console.log(this.once=this.option[j].option);
      
    }
  }
 
})


  }
  changeNo(value:any){
    this.no=value;
    localStorage.setItem('number',JSON.stringify(this.no))
    }
}
