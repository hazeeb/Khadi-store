import { Component } from '@angular/core';
import { ModalController,NavController,ViewController } from 'ionic-angular';
import { ViewProductComponent } from '../../components/view-product/view-product';
	
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

item: any;
	constructor(public navCtrl: NavController, public modalCtrl: ModalController, public viewCtrl: ViewController) {

		this.item =[
			{
		name : 'khadi casual wear',
		price:'1289'
	},{
		name: 'Grey striped kurtis',
		price: '3999'
	}
		];
	}


	openModal() {
		let modal = this.modalCtrl.create(ViewProductComponent);
		modal.present();
	}

	dismiss() {
    this.viewCtrl.dismiss();
  }

}
