import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../service/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private as:AuthService,private router:Router) {
  }
  canActivate():boolean{
    if(!this.as.isAuthenticated()){
      this.router.navigate([''])
    }
    return  true
  }

}
