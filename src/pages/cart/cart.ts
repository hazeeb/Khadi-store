import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart';
import { item} from '../../pages/db';
/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage implements OnInit {
  data = [];
  name;
  price;
  img;
  isdata;
  selected;

  constructor( public cart:CartProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.selected = this.cart.viewCart();
  }

  ngOnInit(){
    console.log("item: ", item);

    if(this.selected.length === 0 ){
      this.isdata = false;
    }else {
      this.isdata = true;
      for(let i=0;i< this.selected.length ; i++){
        this.data.push(item[this.selected[i]]);
      }
      console.log("Data: ",this.data);
    }
  }


}
