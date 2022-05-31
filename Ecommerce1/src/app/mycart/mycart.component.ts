import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
cartItems:any=[]
items:any=[]
product:any=[]
grandTotal=0;
username:any;
  constructor(private router:Router,private http:HttpClient,private auth:AuthService) { }

  ngOnInit(): void {
    
    if(localStorage.getItem('cartItems')){
      this.cartItems=JSON.parse(localStorage.getItem('cartItems')!)
    }
    if(this.cartItems.length==0){
      localStorage.clear();
    }
   
    this.http.get<any>('https://fakestoreapi.com/products').subscribe((res:any)=>{
     console.log(res);
     this.items=res
      this.grand()     
  });
 
  }
remove(i:any){
  this.grandTotal-=this.cartItems[i].totalrate;
this.grandTotal=parseFloat(this.grandTotal.toPrecision(6))
this.cartItems.splice(i,1);
localStorage.setItem('cartItems',JSON.stringify(this.cartItems));
localStorage.setItem('grandTotal',JSON.stringify(this.grandTotal))
}
grand(){
  for(let i=0;i<this.cartItems.length;i++){
    this.grandTotal+=this.cartItems[i].totalrate
    //console.log();
    this.grandTotal=parseFloat(this.grandTotal.toPrecision(6))
    localStorage.setItem('grandTotal',JSON.stringify(this.grandTotal))
 
  }
}
}
