import {Component} from '@angular/core';
import {AuthService} from "./service/auth.service";
import {Collection} from "./Models/Collection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated();
  }

  public booksStore:Collection[]=[]
  constructor(private as: AuthService) {
  }

  login(email: string, password: string) {
    this.as.login(email, password).subscribe(res => {
      },
      error => {
        alert("Wrong login or password")
      })
  }
  register(email: string, password: string) {
    this.as.register(email, password).subscribe(res => {
      alert("Registration success")
      },
      error => {
        alert("Wrong login or password for registration")
      })
  }
  logout() {
    this.as.logout();
  }
}
