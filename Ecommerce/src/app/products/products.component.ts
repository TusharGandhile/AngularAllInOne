import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
items:any=[];
searchText:any;
page:number=1;
no=20;
cartItems:any=[];
  constructor(private http:HttpClient,private router:Router) { }
  totalLength:any;
  ngOnInit(): void {
    localStorage.setItem('number',JSON.stringify(this.no))
    if(localStorage.getItem('number')){
      this.no=JSON.parse(localStorage.getItem('number')!)
    }
    this.http.get<any>('https://fakestoreapi.com/products').subscribe((res:any)=>{
    

      this.items=res
      console.log(this.items)
      this.totalLength=this.items.length;
    })
  }
changeNo(value:any){
this.no=value;
localStorage.setItem('number',JSON.stringify(this.no))
}
addToCart(i:any){
this.cartItems.push(i.id)
console.log(this.cartItems);
localStorage.setItem('cartItems',JSON.stringify(this.cartItems))
}
}
