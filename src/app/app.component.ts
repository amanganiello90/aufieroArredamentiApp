import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Home } from '../pages/home/home';
import { Contatti } from '../pages/contatti/contatti';
import { Login } from '../pages/login/login';
import { Account } from '../pages/account/account';
import { Store } from '../pages/store/store';
import { Carrello } from '../pages/carrello/carrello';
import { Qr} from '../pages/qr/qr';
import { AuthService } from '../providers/auth-service';


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, private auth: AuthService, public events:Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home , icon:'home' },
      { title: 'Login', component: Login, icon:'log-in' },
      { title: 'Crea Account', component: Account, icon:'contact' },
      { title: 'Store', component: Store ,icon:'appstore'},
      { title: 'QR Code', component: Qr , icon:'qr-scanner'},
      { title: 'Carrello', component: Carrello, icon:'cart' },
      { title: 'Contatti', component: Contatti , icon:'contacts'}
    ];
    
    this.events.subscribe('user:loggedIn', status => {
      if(status=='ok'){
      let info = this.auth.getUserInfo();
      this.pages[1].title='Logout ('+info.name+')';
      this.pages[1].icon='log-out';
      }
      else{
      this.pages[1].title='Login';
      this.pages[1].icon='log-in';
      }
     });
    
   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title=='Login' || page.title=='Crea Account' ){
      this.nav.push(page.component);
    }
    else
    this.nav.setRoot(page.component);
  }
}
