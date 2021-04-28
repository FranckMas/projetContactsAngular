import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  mode:number=1;
  contact:Contact;
  idContact:number;

  constructor(public activatedRoute:ActivatedRoute,
              public contactsService:ContactsService,
              public router:Router) {
    this.idContact = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.contactsService.getContact(this.idContact)
      .subscribe(data=>{
        this.contact = data as Contact;
      }), error=>{
      console.log(error);
    }
  }

  updateContact(){
    this.contactsService.updateContact(this.contact)
      .subscribe(data=>{
        alert("Mise à jour effectuée");
        this.router.navigate(['list']);
      }), error=>{
      console.log(error);
    }
  }

}
