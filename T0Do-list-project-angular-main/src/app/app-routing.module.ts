import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TaskformComponent } from './taskform/taskform.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  
  { path:'',redirectTo:'welcome',pathMatch:'full'},
  { path:'welcome',component:WelcomeComponent},
  { path:'taskform',component:TaskformComponent},
  { path:'task-board',component:TaskBoardComponent},
  { path:'edit-task/:id',component:EditTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
