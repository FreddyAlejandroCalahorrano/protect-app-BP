import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { SlideBarComponent } from './nav-bar/slide-bar/slide-bar.component';
import { NavBarModule } from './nav-bar/nav-bar.module';

const routes: Routes = [
  { path: "", component: NavBarComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  //{ path: "register", component: RegisterComponent, pathMatch: "full" },
  //{ path: "portal", component: SlideBarComponent, pathMatch: "full"},
  { path: 'portal',  loadChildren:() => import('./nav-bar/nav-bar.module').then(e => e.NavBarModule)},
  { path: "**", component: NavBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
