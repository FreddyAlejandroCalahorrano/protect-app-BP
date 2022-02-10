import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { SlideBarComponent } from '../nav-bar/slide-bar/slide-bar.component';

const routesSlideBar: Routes = [
  { path: '', component: SlideBarComponent,
    children:[
      {path: 'prueba', component: LoginComponent},
      //{path: 'forms/:id/:selec', component: FormsComponent, canDeactivate: [CanDeactivateGuard]}
    ]
  },
  
];


@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forChild(routesSlideBar),
  ],
  exports: [ RouterModule ]
})
export class SlideBarRoutingModule { }
