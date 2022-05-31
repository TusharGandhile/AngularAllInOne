import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
public exForm!:FormGroup
  constructor(private formbuilder:FormBuilder,private http:HttpClient,public router:Router) { }

  ngOnInit(): void {
    this.exForm=this.formbuilder.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      password:['']

      
   });
  }
  signup(){
  this.http.post<any>('http://localhost:3000/users',this.exForm.value).subscribe((res:any)=>{
  alert('Signup Successfull');
  this.exForm.reset();
   this.router.navigate(['login']);
  
},err=>{
  alert("something went wrong")
})

  }
  // SubmitForm(){
  //   console.log(this.exForm.value);
  //   this.exForm.reset();
  // }
}
