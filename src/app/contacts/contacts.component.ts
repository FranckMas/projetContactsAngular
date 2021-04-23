import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  motCle:string="";
  page:number=0;
  size:number=5;

  constructor(public http:HttpClient, public contactservice:ContactsService) { }

  ngOnInit(): void {
  }

  doSearch(){
    this.contactservice.getContacts(this.motCle, this.page, this.size).subscribe(
      data=>{
        console.log(data);
        this.pageContacts = data;
      }, error => {
        console.log(error);
      }
    )
  }

  search(){
    this.doSearch();
  }

}
