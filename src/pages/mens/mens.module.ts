import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensPage } from './mens';

@NgModule({
  declarations: [
    MensPage,
  ],
  imports: [
    IonicPageModule.forChild(MensPage),
  ],
  exports: [
    MensPage
  ]
})
export class MensPageModule {}
