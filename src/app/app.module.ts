import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from "@angular/common/http";

import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import  {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import {AUTH_API_URL, Store_API_URL} from "./app-injection-tokens";
import {environment} from "../environments/environment";
import {JwtModule} from "@auth0/angular-jwt";
import {ACCESS_TOKEN_KEY} from "./service/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import { AddCollectionComponent } from './components/add-collection/add-collection.component';
import { MyCollectionComponent } from './components/my-collection/my-collection.component';
import { CollectionPageComponent } from './components/collection-page/collection-page.component';
import { AddItemComponent } from './components/add-item/add-item.component';

export  function  tokenGetter(){
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent,
    AddCollectionComponent,
    MyCollectionComponent,
    CollectionPageComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,

    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: environment.tokenWhiteListedDomains
      }
    }),
    ReactiveFormsModule

  ],
  providers: [
    {provide:AUTH_API_URL,useValue: environment.authApi},
    {provide:Store_API_URL,useValue: environment.storeApi}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
