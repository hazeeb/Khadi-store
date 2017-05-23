import {Component} from '@angular/core';
import {ViewController, NavController, NavParams} from 'ionic-angular';
import {item} from '../../pages/db';
import {CartProvider} from '../../providers/cart/cart';
import {AlertController} from 'ionic-angular';


/**
 * Generated class for the ViewProductComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'view-product',
  templateUrl: 'view-product.html'
})
export class ViewProductComponent {

  text:string;
  selectedItem:any;
  name:string;
  img:any;
  price:any;


  constructor(public alertCtrl:AlertController, public viewCtrl:ViewController, public cart:CartProvider, public navCtrl:NavController, public navParams:NavParams) {
    console.log('Hello ViewProductComponent Component');
    this.selectedItem = navParams.get('user');
    console.log(this.selectedItem);

    this.name = item[this.selectedItem].name;
    this.img = item[this.selectedItem].img;
    console.log(this.img);
    this.price = item[this.selectedItem].price;

    console.log("initialize NewItemModal")
    console.log(this.navParams.get("user"))

    console.log(this.name);

  } 

  addToCart(index) {
    if (this.cart.addToCart(index)) {

      let alert = this.alertCtrl.create({
        subTitle: 'Your item has added to cart.',
        buttons: ['OK']
      });
      alert.present();
    }


  }

  goBack() {
    this.navCtrl.pop();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
