import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Home } from '../home/home';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class Account {

 createSuccess = false;
  registerCredentials = {nomeUtente:'', nome:'', cognome:'', email: '', password: '', regione: '', citta: '', cf:'', indirizzo:''};
 
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) {}
 
  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
          this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
    },
    error => {
      this.showPopup("Error", error);
    });
  }
 
  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
       {
         text: 'OK',
         handler: data => {
           if (this.createSuccess) {
             this.nav.setRoot(Home);
           }
         }
       }
     ]
    });
    alert.present();
  }

}
