import {Component} from '@angular/core';
import {AuthService} from "./service/auth.service";
import {Book} from "./Models/Book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated();
  }

  public message: string = "";
  public booksStore:Book[]=[]
  constructor(private as: AuthService) {
  }

  login(email: string, password: string) {
    this.as.login(email, password).subscribe(res => {
      },
      error => {
        alert("Wrong login or password")
      })
  }




  logout() {
    this.as.logout();
  }
}
