import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotePageComponent } from './note-page/note-page.component';
import { HeaderTaskComponent } from './header-task/header-task.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { DatePipe } from '@angular/common';
import { CompletedComponent } from './completed/completed.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotePageComponent,
    HeaderTaskComponent,
    TaskBoardComponent,
    CompletedComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
