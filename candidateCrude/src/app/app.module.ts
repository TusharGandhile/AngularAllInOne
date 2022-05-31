import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateFormComponent,
    CandidateListComponent,
    EditCandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
