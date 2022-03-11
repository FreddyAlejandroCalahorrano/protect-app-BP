import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Contacts } from 'src/app/modules/side-bar/contacts/contacts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  rootURL:string = environment.API_URL

  constructor(private http: HttpClient) {
  }


  /////////CONTACTOS///////////////
  
  getContacts(): Observable<Contacts[]>{
    return this.http.get<Contacts[]>(this.rootURL + 'contacts')
  }

  /////////CUENTAS//////

  getListTipoCuenta(tipo?: string){

    let params:any = {};
    if(tipo){
      params['tipo'] = tipo
    }
    return this.http.get(`${this.rootURL}cuentas/tipo-cuenta`)
  }


  ///TRANS////
  getListTrans(id?: string){
    return this.http.get(`${this.rootURL}trans/tipoTrans` , {
      params:{
        idCuenta:id
      }
    }) 
  }

}
