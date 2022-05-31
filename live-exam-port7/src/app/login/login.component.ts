import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

public loginForm!:FormGroup;
token!: string;
details:any;
  constructor(private service:AuthService, private formbuilder:FormBuilder,private http:HttpClient,private router:Router,private recaptchaV3Service: ReCaptchaV3Service) { 
    
  }

  ngOnInit(): void {

   // localStorage.removeItem('token')
    this.loginForm=this.formbuilder.group({
      email:[''],
      password:['']
    })
     }
   login(form:any){
    
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.debug(`Token [${token}] generated`);
      let data={
        email:form.email,
        password:form.password,
        reCaptchaToken:token
      }
      this.http.post<any>('http://admin.liveexamcenter.in/api/auth/login',data).subscribe((res:any)=>{
                localStorage.setItem('token',JSON.stringify(res.token))
                localStorage.setItem('user',JSON.stringify(res))
        console.log(res.token)
        console.log(res);
        if(localStorage.getItem('token')){
        this.router.navigate(['/dashboard/default'])        
        }else{
          alert('Unauthorize login')
        }  
      }
      ,(err)=>{
        alert("Invalid login");
        }
      )
    });
  }
    
}
