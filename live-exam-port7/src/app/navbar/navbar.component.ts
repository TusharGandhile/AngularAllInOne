import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
user:any=[];

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
     this.user=JSON.parse( localStorage.getItem('user')!)
     console.log(this.user);
     
    }
  }
logout(){
localStorage.clear();
  this.router.navigate(['login'])
}
}
