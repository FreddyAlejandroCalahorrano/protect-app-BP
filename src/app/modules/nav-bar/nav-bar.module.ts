import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardComponent } from './card/card.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { NavBarRoutingModule } from './nav-bar-routing.module';

const components = [
  NavBarComponent
]


@NgModule({
  declarations: [
    ...components,
    CardComponent,
    CuentasComponent
  ],
  imports: [
    CommonModule,
    NavBarRoutingModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class NavBarModule { }
