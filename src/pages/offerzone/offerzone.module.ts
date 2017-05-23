import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferzonePage } from './offerzone';

@NgModule({
  declarations: [
    OfferzonePage,
  ],
  imports: [
    IonicPageModule.forChild(OfferzonePage),
  ],
  exports: [
    OfferzonePage
  ]
})
export class OfferzonePageModule {}
