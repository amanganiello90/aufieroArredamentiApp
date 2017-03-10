import { Component } from '@angular/core';
import { Account } from '../account/account';
import { NavController, AlertController, LoadingController, Loading, Events } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Home } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

loading: Loading;
 registerCredentials = {email: '', password: ''};
 alreadyLogin=false;
 username='';
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public events: Events) {
    let info = this.auth.getUserInfo();
    if((info!=undefined)|| (info!=null)){
      this.alreadyLogin=true; 
      this.username="'"+info.name+"'";
    }
     
  }
 
  public createAccount() {
    this.nav.push(Account);
  }
 
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        setTimeout(() => {
        this.loading.dismiss();
        this.events.publish('user:loggedIn', 'ok');
        this.nav.setRoot(Home)
        });
      } else {
        this.showError("Accesso Negato");
      }
    },
    error => {
      this.showError(error);
    });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Attendere...'
    });
    this.loading.present();
  }
 
  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
 
    let alert = this.alertCtrl.create({
      title: 'Errore',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
  
   public logout() {
    this.auth.logout().subscribe(succ => {
        this.events.publish('user:loggedIn', 'no');
        this.nav.setRoot(Login)
    });
  }

}
