import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../../services/contacts.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  infos = {
    name:'Franck',
    email:'franckmaslonka@gmail.com'
  };

  constructor() { }

  ngOnInit(): void {
  }




}
