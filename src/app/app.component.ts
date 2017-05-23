import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';
import {IntroPage} from '../pages/intro/intro';
import {LoginPage} from '../pages/login/login';
import {WomensPage} from '../pages/womens/womens';
import {HomePage} from '../pages/home/home';
import {MensPage} from '../pages/mens/mens';
import {ProfilePage} from '../pages/profile/profile';
import {OfferzonePage} from '../pages/offerzone/offerzone';

import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  pages = [
    {title: 'Home', component: HomePage},
    {title: 'Womens Wear', component: WomensPage},
    {title: 'Mens Wear', component: MensPage},
    {title: 'Offers', component: OfferzonePage},
    {title: 'Settings', component: ProfilePage},
    {title: 'Logout', component: ProfilePage}
  ];


  constructor(platform:Platform, afAuth:AngularFireAuth, statusBar:StatusBar, splashScreen:SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      const authObserver = afAuth.authState.subscribe(user => {
        if (user) {
          this.rootPage = TabsPage;
          authObserver.unsubscribe();
        } else {
          this.rootPage = LoginPage;
          authObserver.unsubscribe();
        }
      });


      // this is for slides for first visit
      if (localStorage.getItem('loader')) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = IntroPage;
        localStorage.setItem('loader', 'done');
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.rootPage = page.component;
  }
}
