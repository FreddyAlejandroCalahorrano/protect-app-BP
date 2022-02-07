import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const components = [
  NavBarComponent
]


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class NavBarModule { }
