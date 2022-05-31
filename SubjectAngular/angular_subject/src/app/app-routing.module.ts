import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';

const routes: Routes = [
  {path:'',redirectTo:'com1',pathMatch:'full'},
  {path:'com1',component:Com1Component},
  {path:'com2',component:Com2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
