import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoginStatus : boolean = false ; 


  constructor(private _router : Router) { }

  isAuthenticated() : Promise<boolean>{
    return new Promise ((resolve , reject) => {
      setTimeout(() => {
        resolve(this.isLoginStatus)
      }, 1000);
    })
  }


  getStatusLogin(){
    return this.isLoginStatus;
  }


  loginToApp(){
    
    this.isLoginStatus = true ;
  }


  logOut(){
    this.isLoginStatus = false ;
    this._router.navigate(['/'])
  }








}
