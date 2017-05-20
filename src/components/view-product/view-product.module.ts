import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewProductComponent } from './view-product';

@NgModule({
  declarations: [
    ViewProductComponent,
  ],
  imports: [
    IonicPageModule.forChild(ViewProductComponent),
  ],
  exports: [
    ViewProductComponent
  ]
})
export class ViewProductComponentModule {}
