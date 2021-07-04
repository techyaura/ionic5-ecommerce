import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CommonFeaturesModule } from '../common/common-features.module';

import { MyCartPageRoutingModule } from './my-cart-routing.module';

import { MyCartPage } from './my-cart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonFeaturesModule,
    MyCartPageRoutingModule
  ],
  declarations: [MyCartPage]
})
export class MyCartPageModule {}
