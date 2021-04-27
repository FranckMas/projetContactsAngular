import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  mode:number=1;
  contact:Contact = new Contact();

  constructor(public contactService:ContactsService) { }

  ngOnInit(): void {
  }

  saveContact(){
    this.contactService.saveContact(this.contact).subscribe(
      data=>{
        this.contact = data as Contact;
        this.mode=2;
      },error => {
        console.log(error)
      }
    )
  }
}
