import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  //subject
  private isLoggedSubject: BehaviorSubject<boolean>;  
  
  constructor() {
    this.isLoggedSubject = new BehaviorSubject<boolean>(false);
  }

  login(userName:string, password:string){
    // call api and get access token
    let userToken = '1234jck';
    localStorage.setItem('token',userToken);
    this.isLoggedSubject.next(true);
  }

  logOut(){
    localStorage.removeItem('token');
  }

  get isUserLogged():boolean{
    return (localStorage.getItem('token')) ? true : false;
  }

  //subject so can act as observable and observe, so must detect return type  
  getLoggedStatus():Observable<boolean>
  {
    return this.isLoggedSubject.asObservable();
  }
}
