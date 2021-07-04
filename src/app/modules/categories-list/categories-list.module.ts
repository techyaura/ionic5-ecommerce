import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonFeaturesModule } from '../common/common-features.module';

import { CategoriesListPageRoutingModule } from './categories-list-routing.module';

import { CategoriesListPage } from './categories-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonFeaturesModule,
    CategoriesListPageRoutingModule
  ],
  declarations: [CategoriesListPage]
})
export class CategoriesListPageModule {}
