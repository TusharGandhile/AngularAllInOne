import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  public Editortxt=ClassicEditor;
questionForm!:FormGroup;
rich=false;
expand=false;
ctype=false;
duplicate=false;
richtext:any=[];
optval:any=[];
options=[1,2,3,4];
token:any;
topicsURL='http://admin.liveexamcenter.in/api/topics/subject/';
//topicURL='https://admin.liveexamcenter.in/api/topics?page=1&limit=100&term=';
subjectURL='http://admin.liveexamcenter.in/api/subjects?page=1&limit=47&term=';
questionURL='http://admin.liveexamcenter.in/api/questions?page=1&limit=20&term=&topic=';
editURL='http://admin.liveexamcenter.in/api/questions'
keyword = 'name';
  topicdata :any=[];
  subjectdata:any=[];
  //topicdata1:any=[];
  questiondata:any=[];
  //formvalue:any=[];
  formvalue:any=[
    {option:'1', isCorrect:false},
        {option:'2', isCorrect:false},
        {option:'3', isCorrect:false},
        {option:'4', isCorrect:false}];
  nid:any;
  constructor(private http:HttpClient ,private formBuilder:FormBuilder,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.token=JSON.parse(localStorage.getItem('token')!)
    //  console.log(this.token);
      
    }
    this.route.params.subscribe(data =>{
      this.nid=data;
      console.log(this.nid);
      
    })
    const headers={headers:{"Authorization":this.token}}
this.http.get<any>(this.subjectURL,headers).subscribe((res:any)=>{
  this.subjectdata=res.result;
  console.log(res);
  
});

this.http.get<any>(this.questionURL,headers).subscribe((res:any)=>{
  this.questiondata=res.result;
  console.log(this.questiondata);
  for(let i=0;i<this.questiondata.length;i++){

    
    if(this.questiondata[i]._id==this.nid.id){
      console.log(this.questiondata[i]);
      this.http.get<any>(this.topicsURL+this.questiondata[i].subject,{headers:{"Authorization":this.token}}).subscribe((data:any)=>{
        this.topicdata=data
        console.log(this.topicdata);
      });
      if(this.questiondata[i].type=="MULTIPLE RESPONSE"){
        this.ctype=true;
      }
      this.questionForm.patchValue(this.questiondata[i])
    }
  }
});

// this.http.get<any>(this.topicURL,headers).subscribe((data:any)=>{
//   this.topicdata=data.result
//   this.Topicdata=data.result
  
//   console.log(data);
// });
this.questionForm = this.formBuilder.group({
  subject: ['', Validators.required],
  topic: ['', Validators.required],
  type: ['', Validators.required],
  rightMarks: ['', Validators.required],
  diffLevel: ['', Validators.required],
  wrongMarks: ['', Validators.required],
  questionText: ['', Validators.required],
  options: ['', Validators.required],
});
  }
  enablerich(){
    this.rich=true;
  }
  disablerich(){
    this.rich=false;
  }
  enablerichOpt(value:any){
    console.log(value);
    
      for(let i=0;i<this.options.length;i++){
     if(this.options[i]==value+1){
        this.richtext.push(i)
       }
    }
  }
  disablerichOpt(value:any){
    for(let i=0;i<this.richtext.length;i++){
       if(this.richtext[i]==value){
        this.richtext.splice(i,1)
      }
    }
  }
  fullScreen(){
  this.expand=true;
  }
  compresScreen(){
    this.expand=false;
  }
  addOption(){
    this.options.push(this.options.length+1)
  }
  removeOption(i:any){
    this.options.splice(i,1);
  }
  
  selectSubject(sub:any){
    this.http.get<any>(this.topicsURL+sub,{headers:{"Authorization":this.token}}).subscribe((data:any)=>{
      this.topicdata=data
      console.log(this.topicdata);
    });
    // this.topicdata1=[];
    //   for(let i=0;i<this.Topicdata.length;i++){
    //     if(this.Topicdata[i].subject._id==sub){
    //      console.log(this.Topicdata[i]);      
    //    this.topicdata1.push(this.Topicdata[i])
    //        }
    //    }
    // console.log(this.topicdata1);
    // this.topicdata=this.topicdata1;
  
  }
  changeType(type:any){
    console.log(type);
    
    if(type=="MULTIPLE RESPONSE"){
      this.ctype=true;
    }else if(type=="MULTIPLE CHOICE" || type=="FILL IN BLANKS"){
      this.ctype=false;
    }
  }
  optionsOne(data:any,i:any){
    // this.formvalue.push({option:data,iscorrect:true})
    // console.log(this.formvalue);
    // this.questionForm.value.options=this.formvalue;
    if(this.optval==data){
      this.duplicate=true;
        }
        else{
          let ans=[]
       if( (document.getElementById(i)as HTMLInputElement).checked){
        
         
         console.log(i);
         this.formvalue[i].isCorrect=true;
         
       }
        console.log(data);
        if(this.optval[i]==null){
        this.optval.push(data)
        console.log(this.optval);
        }else{
          this.optval[i]=data
        }
        
        //(document.getElementById('opt')as HTMLInputElement).value
        for(let i=0;i<this.formvalue.length;i++){
        this.formvalue[i].option=this.optval[i]
      //this.formvalue.push({option:data,iscorrect:true})
        }
        console.log(this.formvalue);
        this.questionForm.value.options=this.formvalue;
      }
    
  }
  saveQuestion(){
    this.http.put<any>(this.editURL+"/"+this.nid.id,this.questionForm.value,{headers:{"Authorization":this.token}}).subscribe((res:any)=>{

    })
}

  selectTopic(top:any){}

}
