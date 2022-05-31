import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormComponent2DynamicComponent } from './form-component2-dynamic/form-component2-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    FormComponentComponent,
    FormComponent2DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
