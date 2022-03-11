import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(){};

  readonly ISLOGGEDKEY = 'islogged';
  public urlUsuarioIntentoAceder = '';
  
  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();

  login() {
    localStorage.setItem(this.ISLOGGEDKEY, 'true');
    this.changeLoginStatusSubject.next(true);
  }

  logout(){
    localStorage.removeItem(this.ISLOGGEDKEY);
    this.changeLoginStatusSubject.next(false);
  }

  isLoggedIn(){
    const isLogged = localStorage.getItem(this.ISLOGGEDKEY);
    if(!isLogged){
      return false;
    }
    return true;
  }
}
