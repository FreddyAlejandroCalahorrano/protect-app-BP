import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Contacts } from './contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Observable<Contacts[]>
  searchContacts: string = ""
  showDataContact: boolean = true
  selectContact: Contacts

  constructor(private contactsService: UsuariosService) { }

  ngOnInit(): void {

    this.contacts = this.contactsService.getContacts().pipe(
      tap((data) => {
        this.selectContact = data[0]
      })
    )
    
    
    // this.contactsService.getListTipoCuenta('NT').subscribe(lista => {
    //   console.log(lista)
    // })
    
  }
  searchContact(){
    console.log(this.searchContacts)
  }

  addContact(){
    this.showDataContact = false
  }

  onClickSelectContact(event: any){
    this.showDataContact = true
    this.selectContact = event
    console.log(this.selectContact)
  }

  editContact(){
    this.showDataContact = false

  }
}
