import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './dashboard/default/default.component';
import { LoginComponent } from './login/login.component';
import { AddQuestionComponent } from './questions/add-question/add-question.component';
import { DefaultsComponent } from './questions/defaults/defaults.component';
import { EditQuestionComponent } from './questions/edit-question/edit-question.component';
import { QuestionsComponent } from './questions/questions.component';
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
      {path:'',component:DefaultsComponent},
      {path:'defaults',component:DefaultsComponent},
      {path:'subjects',component:SubjectsComponent},
     {path:'topics',component:TopicsComponent},
     {path:'add-question',component:AddQuestionComponent},
     {path:'edit-question/:id',component:EditQuestionComponent}
    ],canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
