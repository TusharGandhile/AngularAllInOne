import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycartComponent } from './mycart/mycart.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'mycart',component:MycartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
