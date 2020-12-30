import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutritiePageRoutingModule } from './nutritie-routing.module';

import { NutritiePage } from './nutritie.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, NutritiePageRoutingModule],
  declarations: [NutritiePage],
})
export class NutritiePageModule {}
