import { Router } from '@angular/router';

import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cuentas } from './cuentas';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  cuentas$: any
  destroy$: Subject<boolean> = new Subject<boolean>()
  constructor(private _cuentas: UsuariosService, private route: Router ) { }


  ngOnDestroy(){
    this.destroy$.unsubscribe()
  }

  ngOnInit(): void {
    this.cuentas$ = this._cuentas.getListTipoCuenta().pipe(
      takeUntil(this.destroy$)
    )
    
    console.log("Cuetas", this.cuentas$)
  }

  onClickSelectPerson(event: any){
    console.log(event)
    this.route.navigate(['portal', 'trans', event.id, event.Descripcion])
  }
}
