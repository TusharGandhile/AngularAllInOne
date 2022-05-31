import { NgModule, ɵNgModuleFactory } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule,  RecaptchaSettings, RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './dashboard/default/default.component';
import { QuestionsComponent } from './questions/questions.component';
import { SubjectsComponent } from './questions/subjects/subjects.component';
import { TopicsComponent } from './questions/topics/topics.component';
import { NavComponent } from './questions/nav/nav.component';
import { DefaultsComponent } from './questions/defaults/defaults.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { AddQuestionComponent } from './questions/add-question/add-question.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditQuestionComponent } from './questions/edit-question/edit-question.component';
import { LettersAvatarModule } from "ngx-letters-avatar";
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    DefaultComponent,
    QuestionsComponent,
    SubjectsComponent,
    TopicsComponent,
    NavComponent,
    DefaultsComponent,
    AddQuestionComponent,
    EditQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaFormsModule,
    RecaptchaV3Module,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MDBBootstrapModulesPro.forRoot(),
   
    CKEditorModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    AutocompleteLibModule,
    NgSelectModule,
    LettersAvatarModule,
    AvatarModule
   
    
    
    
  ],
  providers: [{
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: environment.recaptcha.siteKey,

  },MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
