import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WomensPage } from './womens';

@NgModule({
  declarations: [
    WomensPage,
  ],
  imports: [
    IonicPageModule.forChild(WomensPage),
  ],
  exports: [
    WomensPage
  ]
})
export class WomensPageModule {}
