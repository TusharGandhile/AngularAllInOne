import { Component, OnInit } from '@angular/core';
import { AbstractControl, DefaultValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent implements OnInit {
  regForm!: FormGroup;
  mySkills = ['Angular', 'React', 'Node.Js', 'javascript', 'flutter', 'java'];
  formdata: any = []
  arr = [1, 2];

  a = true
  checkarr!: FormArray
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if (localStorage.getItem('formvalue')) {
      this.formdata = JSON.parse(localStorage.getItem('formvalue')!)
    }

    this.regForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.email],
      address: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      skills: this.formBuilder.array([]),
      experience: this.formBuilder.array([]),

    });

    for (let i of this.arr) {
      this.addExperience()
      console.log('hii');

    }

  }
  submit() {
    console.log(this.regForm.value)
    this.formdata.push(this.regForm.value)
    localStorage.setItem('formvalue', JSON.stringify(this.formdata))
    this.router.navigate(['candidateList'])
  }
  get exp() {
    return this.regForm.controls['experience'] as FormArray
  }
  changecheck(e: any, skills: any) {
    this.checkarr = this.regForm.controls['skills'] as FormArray;
    if (e.target.checked) {
      this.checkarr.value.push(e.target.value)
    }
    else {

      this.checkarr.value.find((item: AbstractControl) => {
        if (e.target.value === item) {
          this.checkarr.value.splice(skills, 1);
        }

      })

    }
    if (this.checkarr.value.length < 3) {
      this.a = true;
    } else {
      this.a = false
    }
  }
  addExperience() {
    if(this.exp.length<5){
    this.exp.push(this.formBuilder.group({
      company: ['', Validators.required],
      duration: ['', Validators.required],
      responsibility: ['', Validators.required],
    })
    )}
  }
  removeexperience(i: any) {
    this.exp.removeAt(i);
  }
}
