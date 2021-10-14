import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Token} from "../Models/token";
import {HttpClient} from "@angular/common/http";
import {AUTH_API_URL, Store_API_URL} from "../app-injection-tokens";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";
import {map, tap} from "rxjs/operators";
import {Collection} from "../Models/Collection";


export  const ACCESS_TOKEN_KEY = 'bookstore_access_token'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  books:Collection[]=[];
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

  register(email:string,password:string){
    return this.http.post(`${this.apiUrl}api/auth/register`,{
      email,password
    })
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
