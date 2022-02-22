import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuentasComponent } from './cuentas/cuentas.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routesNavBar: Routes = [
  { path: '', component: NavBarComponent,
    children:[
      {path: 'cuentas', component: CuentasComponent},
      //{path: 'forms/:id/:selec', component: FormsComponent, canDeactivate: [CanDeactivateGuard]}
    ]
  },
  
];


@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forChild(routesNavBar),
  ],
  exports: [ RouterModule ]
})
export class NavBarRoutingModule { }