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
  public totalPages:number;
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;

  constructor(public http:HttpClient, public contactservice:ContactsService) { }

  ngOnInit(): void {
  }


  doSearch(){
    this.contactservice.getContacts(this.motCle, this.currentPage, this.size).subscribe(
      data=>{
        this.pageContacts = data;
        this.totalPages=data["totalPages"];
        this.pages = new Array<number>(this.totalPages);
      }, error => {
        console.log(JSON.parse(error._body).message);
      }
    )
  }

  search(){
    this.doSearch();
  }

  goToPage(i:number){
    this.currentPage=i;
    this.doSearch();
  }

}
