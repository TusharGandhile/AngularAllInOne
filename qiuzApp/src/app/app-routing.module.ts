import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionpageComponent } from './questionpage/questionpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  {path:'', redirectTo:'welcomepage', pathMatch:'full'},
  {path:'welcomepage' ,component:WelcomepageComponent},
  {path:'questionpage',component:QuestionpageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
