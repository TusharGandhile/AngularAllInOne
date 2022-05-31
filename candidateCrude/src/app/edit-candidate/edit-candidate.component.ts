import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.scss']
})
export class EditCandidateComponent implements OnInit {
  regForm!: FormGroup;
  formdata: any = [];
  id: any;
  flag=true
  a = false;
  checkarr!: FormArray 
  mySkills = ['Angular', 'React', 'Node.Js', 'javascript', 'flutter', 'java'];
updateFormdata:any=[]
  constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (localStorage.getItem('formvalue')) {
      this.formdata = JSON.parse(localStorage.getItem('formvalue')!)
      console.log(this.formdata);
}

this.id = this.activatedRoute.snapshot.params['id']
this.updateFormdata=this.formdata[this.id]

    this.regForm = this.formBuilder.group({
      firstName: [this.updateFormdata.firstName, Validators.required],
      lastName: [this.updateFormdata.lastName, Validators.required],
      gender: [this.updateFormdata.gender, Validators.required],
      email: [this.updateFormdata.email,[ Validators.email, Validators.required]],
      address: [this.updateFormdata.address, Validators.required],
      country: [this.updateFormdata.country, Validators.required],
      state: [this.updateFormdata.state, Validators.required],
      zip: [this.updateFormdata.zip, Validators.required],
      skills: this.formBuilder.array([]),
      experience: this.formBuilder.array([]),
     
    });
   
    for (let j = 0; j < this.updateFormdata.experience.length; j++) {
      console.log(this.updateFormdata.experience.length);
      
      this.exp.push( this.formBuilder.group({ 
        company: [this.updateFormdata.experience[j].company, Validators.required],
        duration: [this.updateFormdata.experience[j].duration, Validators.required],
        responsibility: [this.updateFormdata.experience[j].responsibility, Validators.required],
      })
      )  
    }
    this.checkarr= this.regForm.controls['skills'] as FormArray;
    
    }
  update() {
    if(this.flag)this.checkarr.value.push(...this.updateFormdata.skills)
    console.log(this.regForm.value)
    this.formdata[this.id]=this.regForm.value
    localStorage.setItem('formvalue', JSON.stringify(this.formdata))
    this.router.navigate(['candidateList'])
  }
  changecheck(e: any, skills: any) {
   
this.flag=false;
    (this.checkarr.value=="")?this.checkarr.value.push(...this.updateFormdata.skills):"";
    // console.log(this.checkarr.value);
    (e.target.checked)?this.checkarr.value.push(e.target.value): this.checkarr.value.splice(skills, 1);
    if (this.checkarr.value.length <3) {
      this.a = true;
    } else {
      this.a = false
    }
  }
  get exp(){
    return this.regForm.controls['experience'] as FormArray
  }

  addExperience() {
      console.log(this.updateFormdata.experience.length);
      if(this.exp.length<5){
      this.exp.push( this.formBuilder.group({ 
        company: ['', Validators.required],
        duration: ['', Validators.required],
        responsibility: ['', Validators.required],
      })
      )}
  }
  removeexperience(i:any) {
    this.exp.removeAt(i);
  }
}
