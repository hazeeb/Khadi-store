import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { TabsPage } from '../pages/tabs/tabs';
import { OfferzonePage } from '../pages/offerzone/offerzone';
import { LoginPage } from '../pages/login/login';
import { ProfilePage} from '../pages/profile/profile';
import { CartPage } from '../pages/cart/cart';
import { MensPage } from '../pages/mens/mens';
import { WomensPage } from '../pages/womens/womens';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewProductComponent } from '../components/view-product/view-product';
import { AngularFireModule} from 'angularfire2';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { CartProvider } from '../providers/cart/cart';


const config = {
  apiKey: "AIzaSyANlM4rW4vgKtScpmsSv_0ueLZiBgNcb8E",
  authDomain: "ionic-app-bc0db.firebaseapp.com",
  databaseURL: "https://ionic-app-bc0db.firebaseio.com",
  projectId: "ionic-app-bc0db",
  storageBucket: "ionic-app-bc0db.appspot.com",
  messagingSenderId: "990478431893"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ViewProductComponent,
    IntroPage,
    OfferzonePage,
    LoginPage,
    ProfilePage,
    CartPage,
    WomensPage,
    MensPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ViewProductComponent,
    IntroPage,
    OfferzonePage,
    LoginPage,
    ProfilePage,
    CartPage,
    WomensPage,
    MensPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    CartProvider
  ]
})
export class AppModule {}
