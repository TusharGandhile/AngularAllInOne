import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'',component:EmployeeComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'add-emp',component:AddEmpComponent},
  {path:'edit-emp/:id',component:EditEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
