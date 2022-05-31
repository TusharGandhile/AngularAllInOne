import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
empDetails:any=[];
show=true;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem('empDetails')){
      this.empDetails=JSON.parse(localStorage.getItem('empDetails')!);
    }
    for(let i=0;i<this.empDetails.length;i++){
      console.log(this.empDetails[i].name);
      
    }
    if(this.empDetails.length==0){
      this.show=false;
    }
  }
  RemoveEmp(i:any){
this.empDetails.splice(i,1);
localStorage.setItem('empDetails',JSON.stringify(this.empDetails))
  }
EditEmp(i:any){
  this.router.navigate(['edit-emp/',i])
}
}
