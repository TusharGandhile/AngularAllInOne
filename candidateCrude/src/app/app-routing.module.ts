import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';

const routes: Routes = [
  { path: '', redirectTo: 'candidateForm', pathMatch: 'full' },
  { path: 'candidateForm', component: CandidateFormComponent },
  { path: 'candidateList', component: CandidateListComponent },
  {path:'editCandidate/:id',component:EditCandidateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
