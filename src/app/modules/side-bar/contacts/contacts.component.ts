import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Contacts } from './contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Promise<Contacts[]>
  searchContacts: string = ""

  constructor(private contactsService: UsuariosService) { }

  ngOnInit(): void {

    this.contacts = this.contactsService.getContacts()
    this.contacts.then((data => {
        console.log(data)     
      })
    )
    
  }
  searchContact(){
    console.log(this.searchContacts)
  }

  
}
