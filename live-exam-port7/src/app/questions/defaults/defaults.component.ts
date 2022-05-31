import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-defaults',
  templateUrl: './defaults.component.html',
  styleUrls: ['./defaults.component.scss']
})
export class DefaultsComponent implements OnInit {
  token: any
  response: any = [];
  questions: any = [];
  option: any = [];
  once: any = [];
  page: number = 1;
  no = 20;
  searchText: any;
  topiclist: any;
  topic: any;
  que: any;
  ctype=false;
  responseNew: any;
  questionURL='http://admin.liveexamcenter.in/api/questions?page=1&limit=20&term=&topic=';
  topicURL='https://admin.liveexamcenter.in/api/topics?page=1&limit=100&term='
  DeleteApi="http://admin.liveexamcenter.in/api/questions/"
  constructor(private http: HttpClient,private router:Router) { }
  totalLength: any;
  ngOnInit(): void {
    localStorage.setItem('number', JSON.stringify(this.no))
    if (localStorage.getItem('number')) {
      this.no = JSON.parse(localStorage.getItem('number')!)
    }
    if (localStorage.getItem('token')) {
      this.token = JSON.parse(localStorage.getItem('token')!)
      console.log(this.token);

    }
    const headers = { headers: { "Authorization": this.token } }
    this.http.get<any>(this.questionURL, headers).subscribe((res: any) => {
      console.log(res);

      this.response = res.result;
      this.responseNew = res.result;
      console.log(this.response);
      this.totalLength = this.response.length;
      for (let i = 0; i < this.response.length; i++) {
        console.log(this.response[i].type);
        if(this.response[i].type=="MULTIPLE RESPONSE"){
          this.ctype=true;
         }
          else if(this.response[i].type=="MULTIPLE CHOICE" || this.response[i].type=="FILL IN BLANKS"){
          this.ctype=false;
        }
        this.questions = this.response[i];
        this.option = this.questions.options
       // console.log(this.option);
       // console.log(this.response[i].topic);

        for (let j = 0; j < this.option.length; j++) {
          //console.log(this.once = this.option[j].option);

        }
      }

    })
    this.http.get<any>(this.topicURL, headers).subscribe((res: any) => {
      console.log(res);
      this.topiclist = res.result




    });


  }
  changeNo(value: any) {
    this.no = value;
    localStorage.setItem('number', JSON.stringify(this.no))
  }
  selectTopic(item: any) {
if(item){
 this.que = []
  for (let j = 0; j < this.responseNew.length; j++) {
   // console.log(this.responseNew[j].topic+"  " +item)
    if (this.responseNew[j].topic ==item) {
   //console.log(this.responseNew[j]);
     this.que.push(this.responseNew[j])
}
  }
  // console.log(this.que);
   this.response = this.que;

    }else{
    this.http.get<any>(this.questionURL, { headers: { "Authorization": this.token } }).subscribe((res: any) => {
    console.log(res);

    this.response = res.result;});
}

  }
  deleteQuestion(val:any){
console.log(val._id);
let id=val._id;
if (confirm("Are you sure to delete Question ?This cannot be rolled back !!") ){
this.http.delete(this.DeleteApi+id, { headers: { "Authorization": this.token } }).subscribe(data => { 
  this.ngOnInit();
});
}
this.ngOnInit();

  }
  editQuestion(id:any){
    this.router.navigate(['/questions/edit-question',id]);
    console.log(id);
    
  }
}
