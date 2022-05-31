import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
cartItems:any=[]
items:any=[]
product:any=[]
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    if(localStorage.getItem('cartItems')){
      this.cartItems=JSON.parse(localStorage.getItem('cartItems')!)
    }
    this.http.get<any>('https://fakestoreapi.com/products').subscribe((res:any)=>{
     console.log(res);
     this.items=res
       
      for(let i=0;i<this.cartItems.length;i++){
     this.product.push(this.items[this.cartItems[i]-1])
        console.log(this.product)
        
      }
         
  });
  }

}
