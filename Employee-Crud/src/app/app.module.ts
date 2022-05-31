import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmpComponent } from './edit-emp/edit-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavbarComponent,
    AddEmpComponent,
    EditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
