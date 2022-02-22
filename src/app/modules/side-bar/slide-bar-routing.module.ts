import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';

const routesSlideBar: Routes = [
  { path: '', component: SlideBarComponent,
    children:[
      {path: 'contacts', component: ContactsComponent},
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
