import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './about/about.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ContactsService} from "../services/contacts.service";
import {FormsModule} from "@angular/forms";


const appRoutes:Routes = [
  {path: 'about', component:AboutComponent},
  {path: 'contacts', component:ContactsComponent},
  {path: '', redirectTo:'/about', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
