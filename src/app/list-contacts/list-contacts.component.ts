import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {
  pageContacts:any;

  constructor(public http:HttpClient, public contactservice:ContactsService) { }

  ngOnInit(): void {
    this.contactservice.allContacts().subscribe(
      data=>{
        this.pageContacts = data;
        console.log(data);
      }, error =>{
        console.log(JSON.parse(error._body).message);
      }
    )
  }

  listContact(){

  }
}
