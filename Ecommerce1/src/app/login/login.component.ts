import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public exForm!:FormGroup;
user!:SocialUser;
  constructor(private formbuilder:FormBuilder,
              private http:HttpClient,
              private router:Router,
              private socialauthservice:SocialAuthService) { }

  ngOnInit(): void {
   this.socialauthservice.authState.subscribe((user:any)=>{
     this.user=user;
   })
   this.exForm=this.formbuilder.group({
     email:[''],
     password:['']
   })
  }
  login(){
    this.http.get<any>("http://localhost:3000/users").subscribe((res:any)=>{
     // console.log(res.id);
      const user =res.find((a:any)=>{
        return a.email=== this.exForm.value.email &&  a.password === this.exForm.value.password
      });
      if(user){
        alert("login successfull");
        this.exForm.reset();
        this.router.navigate(['products'])
      }
      else{
        alert("User not found")
      }
    },err=>{
      alert("something went wrong!!")
    })
   
  }
  loginwithGoogle(){
    this.socialauthservice.signIn(GoogleLoginProvider.PROVIDER_ID).then((res:any) => {
      console.log(res);
        
        this.user=res;
        localStorage.setItem('token',JSON.stringify(this.user.authToken)); 
   
      let guser={
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        password:this.user.email,
       }
       this.http.post<any>('http://localhost:3000/users',guser).subscribe((res:any)=>{
         console.log(res);
         localStorage.setItem('currentUser',JSON.stringify(res));

         this.http.get<any>("http://localhost:3000/users").subscribe((res:any)=>{
          // console.log(res.id);
           const user =res.find((a:any)=>{
             return a.email=== this.user.email &&  a.password === this.user.email;
           });
           if(user){
             alert("login successfull");
             this.exForm.reset();
             this.router.navigate(['products'])
           }
           else{
             alert("User not found")
           }
         },err=>{
           alert("something went wrong!!")
         })
        
    })
  })
  }
  logout(){
    this.socialauthservice.signOut();
  }
}
