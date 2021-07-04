import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CommonFeaturesModule } from '../common/common-features.module';

import { MyOrdersPageRoutingModule } from './my-orders-routing.module';

import { MyOrdersPage } from './my-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonFeaturesModule,
    MyOrdersPageRoutingModule
  ],
  declarations: [MyOrdersPage]
})
export class MyOrdersPageModule {}
