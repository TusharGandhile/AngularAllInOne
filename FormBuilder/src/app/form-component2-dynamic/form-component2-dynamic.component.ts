import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SubjectService } from '../subject.service';
@Component({
  selector: 'app-form-component2-dynamic',
  templateUrl: './form-component2-dynamic.component.html',
  styleUrls: ['./form-component2-dynamic.component.scss']
})
export class FormComponent2DynamicComponent implements OnInit {
formarr:any=[];
formvalue!:FormGroup;

  constructor(private appService:SubjectService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.appService.stringSubject.subscribe((data: any) => {
      console.log(data);
      this.formarr = data;
      console.log(this.formarr)
      this.formvalue = this.formBuilder.group({ });
  for (let a of this.formarr) {
    if(a.fields=='checkbox'){
      this.formvalue.addControl(a.fname,new FormArray([]));
    }
    else{
      this.formvalue.addControl(a.fname,new FormControl());
    }
  }
      
  })


}
submit(){
console.log(this.formvalue.value);
this.formvalue.reset();
}
changeCheck(e:any,name:any){
console.log(e);

const checkarr: FormArray=this.formvalue.get(name) as FormArray;

if(e.target.checked){
  checkarr.push(new FormControl(e.target.value))
}
else{
  let i=0;
checkarr.controls.forEach((item:AbstractControl)=>{
  if(item.value==e.target.value){
    checkarr.removeAt(i)
  }
  i++;
})
}
}
}



