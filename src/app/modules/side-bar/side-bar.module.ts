import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { SlideBarRoutingModule } from './slide-bar-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { FilterContactPipe } from 'src/app/pipes/filter-contact.pipe';
import { ProductsComponent } from './products/products.component';
import { TransComponent } from './trans/trans.component';



@NgModule({
  declarations: [
    SlideBarComponent,
    ContactsComponent,
    FilterContactPipe,
    ProductsComponent,
    TransComponent
  ],
  imports: [
    CommonModule,
    SlideBarRoutingModule,
    FormsModule,
  ]
})
export class SideBarModule { }
