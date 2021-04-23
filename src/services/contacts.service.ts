import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class ContactsService{

  constructor(public http:HttpClient) {

  }
  getContacts(motcle:string,page:number,size:number){
    return this.http.get("http://localhost:8080/chercher?mc="+motcle+"&size="+size+"&page="+page);
  }
}
