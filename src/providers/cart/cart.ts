import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { item } from '../../pages/db';
/*
  Generated class for the CartProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CartProvider {

  cartArray: any[] = [];
   constructor() {
    console.log('Hello CartProvider Provider');

     console.log(item);
  }

  addToCart(index){
    this.cartArray.push(index);
    console.log(this.cartArray);
    return true;
  }

  viewCart (){
    return this.cartArray;
  }





}
