import { Component, OnInit } from '@angular/core';
import {  FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public exForm!: FormGroup;

  constructor(){}
  


  ngOninit(){
   
    this.exForm=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required , Validators.email]),
      'mobile':new FormControl(null,[Validators.required , Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]),

   });
   
  }
  SubmitForm(){
    console.log(this.exForm.value);
    this.exForm.reset();
  }


}
