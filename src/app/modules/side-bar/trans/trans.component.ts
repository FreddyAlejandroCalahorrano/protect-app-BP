import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Trans } from './trans';

@Component({
  selector: 'app-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.css']
})
export class TransComponent implements OnInit {

  lsTrans: Trans[]
  tipTrans: string 

  constructor(private _activatedRoute: ActivatedRoute, private contactsService: UsuariosService) { }

  ngOnInit(): void {

    // this._activatedRoute.params.subscribe( ({id}) => {
    //   console.log(id)
    //   this.contactsService.getListTrans(id)
    //   .subscribe((ls:any) => this.lsTrans = ls)
    // })  

    this._activatedRoute.params.subscribe( ({Descripcion}) => {
      this.tipTrans = Descripcion
    }) 
    
    this._activatedRoute.params
      .pipe(
        switchMap(({id}) => {
          return this.contactsService.getListTrans(id)
        }),
      ).subscribe((ls:any) => this.lsTrans = ls)
      
     

  }

}
