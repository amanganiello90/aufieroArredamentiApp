import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Contatti } from '../pages/contatti/contatti';
import { Login } from '../pages/login/login';
import { Account } from '../pages/account/account';
import { Store } from '../pages/store/store';
import { Carrello } from '../pages/carrello/carrello';
import { Qr} from '../pages/qr/qr';
import { AuthService } from '../providers/auth-service';


@NgModule({
  declarations: [
    MyApp,
    Home,
    Contatti,
    Login,
    Account,
    Qr,
    Carrello,
    Store
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Contatti,
    Login,
    Account,
    Qr,
    Carrello,
    Store
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},AuthService]
})
export class AppModule {}
