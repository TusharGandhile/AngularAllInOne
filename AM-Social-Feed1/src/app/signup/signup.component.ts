import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  regForm!:FormGroup;
  constructor(private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    
    });
  }
login(){
this.router.navigate(['login']);
console.log('hii')
}
onSubmit(){

}
}
