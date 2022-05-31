import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { NotePageComponent } from './note-page/note-page.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'welcome' , component:WelcomeComponent},
  {path:'note-page' , component:NotePageComponent},
  {path:'edit-note/:id' ,component:EditNoteComponent},
  {path:'task-board', component:TaskBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
