import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Store_API_URL} from "../app-injection-tokens";
import {Observable} from "rxjs";
import {Item} from "../Models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private baseApiUrl = `${this.apiUrl}api/`
  constructor( private http: HttpClient,@Inject(Store_API_URL) private apiUrl:string) { }

  public GetItemFromCollection(id:number):Observable<Item[]>{
    const params = new HttpParams().set("idCollection",id.toString())
    return  this.http.get<Item[]>(`${this.baseApiUrl}Items/GetItems`,{params});
}
  public AddNewItem(idCollection:number,NameItem:string){
    return  this.http.post(`${this.baseApiUrl}Items/AddItem`,{idCollection,NameItem});
  }
}
