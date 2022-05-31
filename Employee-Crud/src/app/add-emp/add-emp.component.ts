import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {
  public empForm!:FormGroup;
  emp:any=[];
  empDetails:any=[];
  State:any= ['maharashtra', 'South Dakota', 'Tennessee', 'Michigan'];
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  constructor(public formbuilder:FormBuilder,private router:Router) { }
  
  ngOnInit(): void {
    if(localStorage.getItem('empDetails')){
      this.empDetails=JSON.parse(localStorage.getItem('empDetails')!);
    }
    this.empForm=this.formbuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      address:[''],
      state:[''],
      city:[''],
      date:[''],
      gender:[''],
      hobbies:[''],
      skills:['']
      
   });

    this.empForm=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'mobile':new FormControl(null,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'address':new FormControl(null,Validators.required),
      'state':new FormControl(null,Validators.required),
       'city':new FormControl(null,Validators.required),
        'date':new FormControl(null,Validators.required),
       'gender':new FormControl(null,Validators.required),
      'hobbies':new FormControl()
      
    })
    
    
  }
AddEmp(){
  console.log(this.empForm.value);
this.emp.push(this.empForm.value)
  localStorage.setItem('empDetails',JSON.stringify(this.emp))
 if(this.empForm.invalid){
  alert('Empty fields not allowed!!')
 }else{
    this.router.navigate(['employee']);
 }
}
changeState(state:any) {
  console.log(state);
  if(state=='maharashtra'){
    this.City=['pune','mumbai']

  }

}
changeCity(city:any) {
  console.log(city);
 }

}
