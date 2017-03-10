import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth-service';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

username = 'login';
  email = '';
  constructor(private nav: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    if(info!=undefined){
    this.username = "logout ("+info.name+")";
    this.email = info.email;
    }
  }
 
  public logoutHome() {
    this.nav.push(Login);
  }
 
}
