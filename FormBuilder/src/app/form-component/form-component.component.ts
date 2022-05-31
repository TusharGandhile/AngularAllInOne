import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

import { SubjectService } from '../subject.service';
// import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
  formval: any = [];
  formarr: any = [];
  b: any = [];
  a: any = [];
  an: any
  name: any;
  formvalue!: FormGroup;
  @ViewChild('frmval') frmval!: NgForm;
  registrationForm!: FormGroup;
  constructor(private appService: SubjectService, private formBuilder: FormBuilder) { }
  formData: any = new FormData();
  ngOnInit(): void {

    this.appService.stringSubject.subscribe((data: any) => {
      console.log(data);
      this.formarr = data;
    })

    this.formvalue = this.formBuilder.group({ });
    
  }


  submit() {

    console.log(this.frmval.value);
    console.log(this.formData);
    for (var pair of this.formData.entries()) {
      console.log(pair[0] + ':{' + pair[1] + "}");
    }
    
    this.frmval.reset();
    this.b = []
  }
  changeCheck(e: any, val: any) {
    let flag = false
    let x: any;
    this.b = this.b.filter((obj: any) => obj.value === e.target.value).length > 0 ? this.b.filter((obj: any) => obj.value !== e.target.value) : [...this.b, { name: val.fname, value: e.target.value }]

    console.log(this.b);
    let temp: any = []
    for (let i = 0; i < this.b.length; i++) {
      if (this.b[i].name == val.fname) {
        temp.push(this.b[i].value)
      }

    }
    console.log(temp);
    this.formData.has(val.fname) ? this.formData.set(val.fname, temp) : this.formData.append(val.fname, temp);
    let check: any = []
    for (var [key, value] of this.formData) {
      check.push({key:key, value:value})
   }

    this.frmval.value.check = check;
    console.log(this.frmval.value);

  }

}



