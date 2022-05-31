import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
list:any=[];
options:any=[];
one:any=[];
id:any;
totalLength:any;
page:number=1;
no:number=0
searchText:any;
arr=[1,2,3,4,5,6,7,8,9,10];
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
if(localStorage.getItem('no')){
  this.no=JSON.parse(localStorage.getItem('no')!)
}
    this.route.params.subscribe(data=>{
      this.id=data
      console.log(this.id)
    })

    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe((res:any)=>{
      this.list=res
      console.log(this.list)
for(let i=0;i<this.list.length;i++){
if(this.id.id == this.list[i].userId){
    this.options.push(this.list[i])
  }
}
this.totalLength=this.options.length;

    })
  }
changeNo(value:any){
  console.log(value)
  this.no=value;
 localStorage.setItem("no",JSON.stringify(this.no))
}
}
