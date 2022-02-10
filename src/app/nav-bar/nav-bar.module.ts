import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { SlideBarRoutingModule } from '../slide-bar/slide-bar-routing.module';

const components = [
  NavBarComponent
]


@NgModule({
  declarations: [
    ...components,
    SlideBarComponent
  ],
  imports: [
    CommonModule,
    SlideBarRoutingModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class NavBarModule { }
