import { Component } from '@angular/core';
import { Config, Platform } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {OfferzonePage } from '../offerzone/offerzone';
import { ProfilePage } from '../profile/profile';
import { CartPage} from '../cart/cart';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OfferzonePage;
  tab3Root = CartPage;
  tab5Root = ProfilePage;

  constructor(private config: Config) {
    this.config.set('tabsHideOnSubPages', false);
  }
}
