import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store_API_URL} from "../app-injection-tokens";
import {config, Observable} from "rxjs";
import {Collection} from "../Models/Collection";
import {ACCESS_TOKEN_KEY} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  private baseApiUrl = `${this.apiUrl}api/`
  constructor( private http: HttpClient,@Inject(Store_API_URL) private apiUrl:string) { }

  getAllCollections():Observable<Collection[]>{
    return  this.http.get<Collection[]>(`${this.baseApiUrl}collection`);
  }

  getUserCollection():Observable<Collection[]>{
    return  this.http.get<Collection[]>(`${this.baseApiUrl}collection/GetUserCollections`);
  }
  addCollections(Topic:string,CollectionName:string,Description:string){
    return  this.http.post(`${this.baseApiUrl}collection/AddCollections`,{
      Topic,CollectionName,Description
    })
  }
}


