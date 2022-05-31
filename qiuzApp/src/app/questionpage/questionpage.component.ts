import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionsService } from '../service/questions.service';

@Component({
  selector: 'app-questionpage',
  templateUrl: './questionpage.component.html',
  styleUrls: ['./questionpage.component.css']
})



export class QuestionpageComponent implements OnInit {
  imageSrc = 'assets/images/tada.jpeg';

  constructor(private questionsService:QuestionsService) { }
  public questionList:any=[];
  public name:string="";
  public result:string="";
  public currentQuestion:number=0;
  public points:number=0;
  minutcounter=10;
  secondcounter=60;
  correctAnswer:number=0;
  incorrectAnswer:number=0;
  interval$:any;
  image:any;
  unattempted:number=0;
  isQuizCompleted:boolean=false;
  isOptionSelected:boolean=false;
  ngOnInit(): void {
    this.name=localStorage.getItem('name')!;
    this.getAllQuestions();
    this.minutCounter();
    this.secondCounter();
  }
  getAllQuestions(){
 this.questionsService.getQuestionJson().subscribe(res=>{
   this.questionList=res.questions;
  })
}

nextQuestion(){ 
  
 if(this.currentQuestion==10){
    this.isQuizCompleted=true;
    this.stopCounter();
  }
  else if(this.isOptionSelected==false){
    this.unattempted++;
    console.log(this.unattempted);
    console.log(this.currentQuestion);
    if(this.currentQuestion<10){
      this.currentQuestion++;
        }
        
  }
  else{
    this.isOptionSelected=true
    console.log(this.unattempted);
    console.log(this.currentQuestion);
  }
  this.isOptionSelected=true;
  
  

}
previousQuestion(){
this.currentQuestion--;
}

answer(currentQuestion:number,option:any){ 
  this.isOptionSelected=true;
  this.currentQuestion++;
  console.log(this.currentQuestion)
  if(option.correct){
    this.points+=2;
    this.correctAnswer++;
    setTimeout(() => {
      
     
      
    }, 2000);
    
    //this.result=1;
  }

else{
  setTimeout(() => {
    
    this.incorrectAnswer++;
    
  }, 2000);
  //this.result=0;
}

if(this.currentQuestion==10)
{
 
  this.isQuizCompleted=true;
  this.stopCounter();
}
/*if(this.currentQuestion==this.questionList.length){
  console.log("clicked")
  this.isQuizCompleted=true;
  this.stopCounter();
}*/
}

minutCounter(){
this.interval$=interval(59999).subscribe(val=>{
  this.minutcounter--;
  if(this.minutcounter===0){
    
    this.minutcounter=9;
  }
});
setTimeout(()=>{
  this.interval$.unsubscribe()
  
  } ,600000);
  }
secondCounter(){
  this.interval$=interval(1000).subscribe(val=>{
    this.secondcounter--;
    if(this.secondcounter===1){

      this.secondcounter=59;
    }
  });
setTimeout(()=>{
this.interval$.unsubscribe()

} ,600000);
}
stopCounter(){
this.interval$.unsubscribe();
this.minutcounter=0;
this.secondcounter=0;
}
/*resetCounter(){

}*/
}


