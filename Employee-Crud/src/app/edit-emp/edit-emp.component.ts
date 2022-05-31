import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.scss']
})
export class EditEmpComponent implements OnInit {
id:any;
emp:any=[]
empDetails:any=[];
empForm!:FormGroup;
State:any= ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  constructor(private route:ActivatedRoute,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    if(localStorage.getItem('empDetails')){
      this.empDetails=JSON.parse(localStorage.getItem('empDetails')!);

    }
    this.route.params.subscribe((data) => {
     
      this.id=data;
      console.log(this.id)
      console.log(this.empDetails[this.id.id]);
    // this.naddtask=this.addtask[this.nid.id];

     
      // (document.getElementById('date') as HTMLInputElement).value = this.naddtask.date;
    })
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
updateEmp(){
  this.emp[this.id.id]=this.empForm.value;
  localStorage.setItem('empDetails',JSON.stringify(this.emp))
}
changeState(state:any) {
  console.log(state);

}
}
