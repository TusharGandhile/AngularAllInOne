import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedin(){    
    if(localStorage.getItem('user')){
      return true;
    }
    return false;
    
  }

}
