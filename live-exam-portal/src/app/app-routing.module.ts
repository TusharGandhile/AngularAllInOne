import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './dashboard/default/default.component';
import { LoginComponent } from './login/login.component';
import { DefaultsComponent } from './questions/defaults/defaults.component';
import { SubjectsComponent } from './questions/subjects/subjects.component';
import { TopicsComponent } from './questions/topics/topics.component';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard/default',component:DefaultComponent,canActivate:[AuthGuard]},

  {
    path:'questions', 
    
    children: [
      {path:'defaults',component:DefaultsComponent},
     {path:'subjects',component:SubjectsComponent},
      {path:'topics',component:TopicsComponent},
    ],canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
