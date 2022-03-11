import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from 'src/Gards/can-activate.guard';
import { LoginComponent } from './modules/login/login/login.component';
import { NavBarComponent } from './modules/nav-bar/nav-bar/nav-bar.component';

const routes: Routes = [
  { path: "", loadChildren:() => import('./modules/nav-bar/nav-bar.module').then(e=> e.NavBarModule)},
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: 'portal',  loadChildren:() => import('./modules/side-bar/side-bar.module').then(e => e.SideBarModule), canActivate: [CanActivateGuard]},
  { path: "**", component: NavBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
