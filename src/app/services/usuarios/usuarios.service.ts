import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Contacts } from 'src/app/modules/side-bar/contacts/contacts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //private rootURL = "https://curso-angular-api.herokuapp.com/";

  rootURL:string = "http://localhost:3000/"

  constructor(private http: HttpClient) {
  }


  /////////CONTACTOS///////////////
  
  public getContacts(): Promise<any>{
    return this.http.get(this.rootURL + 'contacts').toPromise()
  }

  
}
