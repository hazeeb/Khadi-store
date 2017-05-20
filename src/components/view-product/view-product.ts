import { Component } from '@angular/core';
import { ModalController,NavController,ViewController } from 'ionic-angular';

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

  text: string;

  constructor(public viewCtrl: ViewController) {
    console.log('Hello ViewProductComponent Component');
    this.text = 'Hello World';
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
