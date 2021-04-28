import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactsService} from "../../services/contacts.service";
import {Router} from "@angular/router";
import {Contact} from "../../model/model.contact";
import {state} from "@angular/animations";

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  pageContacts:any;

  constructor(public http:HttpClient, public contactservice:ContactsService, public router:Router) { }

  ngOnInit(): void {
    this.contactservice.allContacts().subscribe(
      data=>{
        this.pageContacts = data;
      }, error =>{
        console.log(JSON.parse(error._body).message);
      }
    )
  }

  onEditContact(id:number){
    this.router.navigate(['editContact', id]);
  }

  onDeleteContact(id:number){
      let confirm = window.confirm("Etes-vous sûr ?");
      if (confirm==true){
        this.contactservice.deleteContact(id).subscribe(
          data=>{
            this.ngOnInit();
          }, error =>{
            console.log(JSON.parse(error._body).message);
          }
        )
      }

    }
}
