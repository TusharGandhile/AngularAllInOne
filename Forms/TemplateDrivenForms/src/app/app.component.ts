import { Component } from '@angular/core';
import { User } from './user';
import { EnrolmentService } from './enrolment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _enrolmentservice:EnrolmentService){}

  title = '';
  errorMsg:any;
  haserror=false;
  submitted=false;
  topics=['Angular','React','Node','MongoDB'];
  userModel= new User('ram','ram@123',9087654321,'default','morning',true);
   
  validateTopic(value: string){
    if(value === 'default'){
    this.haserror=true;
    console.log("clicked");
    }else{
      this.haserror=false;
    }
  }
  onSubmit(){
    this.submitted=true;
    this._enrolmentservice.enroll(this.userModel)
    .subscribe(
      data=>console.log('success!',data),
      error=>this.errorMsg = error.statusText)
  }
}
