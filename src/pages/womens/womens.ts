import { Component } from '@angular/core';
import { ModalController,NavController,ViewController } from 'ionic-angular';
import { ViewProductComponent } from '../../components/view-product/view-product';
import { item } from '../db';


 @Component({
  selector: 'page-womens',
  templateUrl: 'womens.html',
})
export class WomensPage {

  items: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public viewCtrl: ViewController) {

    this.items = item;

  }

  openModal(index) {

    let modal = this.modalCtrl.create(ViewProductComponent, {"user": index});
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
