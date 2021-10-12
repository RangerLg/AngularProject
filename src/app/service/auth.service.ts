import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Token} from "../Models/token";
import {HttpClient} from "@angular/common/http";
import {AUTH_API_URL, Store_API_URL} from "../app-injection-tokens";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";
import {map, tap} from "rxjs/operators";
import {Book} from "../Models/Book";


export  const ACCESS_TOKEN_KEY = 'bookstore_access_token'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  books:Book[]=[];
  constructor(private  http:HttpClient,
              @Inject(AUTH_API_URL) private apiUrl:string,
              @Inject(Store_API_URL) private storeUrl:string,
              private jwtHelper:JwtHelperService,
              private  router:Router) { }

  login(email:string,password:string):Observable<Token>{


    return this.http.post<Token>(`${this.apiUrl}api/auth/login`,{
      email,password
    }).pipe(
      tap(token=>{

        localStorage.setItem(ACCESS_TOKEN_KEY,token.access_token);
      })
    )
  }



Books():Observable<Book[]> {
  return  this.http.get<Book[]>(`${this.storeUrl}api/books`)
}
  isAuthenticated():boolean{
    var token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return  token!=null && !this.jwtHelper.isTokenExpired(token)
  }

  logout():void{
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.router.navigate(['']);
  }
}
