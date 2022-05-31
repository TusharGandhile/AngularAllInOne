import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../shared/auth.service';
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
qty:any;
txtval!:string;
  constructor(private http:HttpClient,
              private router:Router,
              private auth:AuthService) { }
  totalLength:any;
 
  ngOnInit(): void {
   
    localStorage.setItem('number',JSON.stringify(this.no))
    if(localStorage.getItem('number')){
      this.no=JSON.parse(localStorage.getItem('number')!)
    }
    if(localStorage.getItem('qty')){
      this.qty=JSON.parse(localStorage.getItem('qty')!)
    }
    if(localStorage.getItem('cartItems')){
      this.cartItems=JSON.parse(localStorage.getItem('cartItems')!)
    }
    this.http.get<any>('https://fakestoreapi.com/products').subscribe((res:any)=>{
    

      this.items=res
      console.log(this.items)
      this.totalLength=this.items.length;
       this.items.forEach((i: any) => {
        let quantity = 1;
       i.quantity=quantity;
       let totalrate=i.price * quantity;
      // console.log(totalrate);
      i.totalrate=totalrate
      })

      console.log(this.items);
      
    })
  }
changeNo(value:any){
this.no=value;
localStorage.setItem('number',JSON.stringify(this.no))
}
increment(i:any){
  i.quantity++;
  i.totalrate=Math.round(i.totalrate+i.price)
  
 console.log ( i.quantity +" "+ i.totalrate);
 let a=(document.getElementsByClassName('prod-qty')[i.id-1]);
  a.innerHTML= i.quantity;
  
  
}
decrement(i:any){
  if(i.quantity>1){
  i.quantity--;
  i.totalrate=Math.round(i.totalrate-i.price)
  // this.cartItems[i.id-1].quantity
 console.log ( i.quantity +" "+ i.totalrate);
 let a=(document.getElementsByClassName('prod-qty')[i.id-1]);
  a.innerHTML= i.quantity;
  }else{
    alert("Minimum Quantity 1 excepted!!")
  }
}
addToCart(i:any){
  let isItem=true;

  // else{
  for(let j=0;j<this.cartItems.length;j++){
   if(this.cartItems[j].id==i.id){
      this.cartItems[j].quantity=this.cartItems[j].quantity+i.quantity
      isItem=false;
    }
    // else{
    //   this.cartItems.push(i)
    // }
  
}
if(isItem){
  this.cartItems.push(i)
}
 // console.log(i.id);
console.log(this.cartItems);
localStorage.setItem('cartItems',JSON.stringify(this.cartItems))
}

}
