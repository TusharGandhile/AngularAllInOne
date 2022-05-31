import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  @ViewChild('frm') frm!: NgForm;
 formarray:any=[]
  opt:any=[];
  option=false;
  form!: FormGroup;
  constructor(private appService:SubjectService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
   
    this.form = this.formBuilder.group({ 
      label:['',Validators.required],
      fields:['',Validators.required],
      fname:['',Validators.required],
      options:[''],
      });
  
  }
 

addField(){
  if(this.form.value.options!=null){
  console.log(this.form.value);
  this.opt=this.form.value.options
  console.log(this.opt);
  let option = this.opt.split(',');
  this.form.value.options=option;
  }
  this.formarray.push(this.form.value)
 // localStorage.setItem('formvalue',JSON.stringify(this.formarray))
  this.appService.passValue(this.formarray);
  this.form.reset();
}
changeField(val:any){
  if(val=='radio' || val=='checkbox' || val=='select'){
    this.option=true;
    }
  else{
    this.option=false;
  }


}

}
