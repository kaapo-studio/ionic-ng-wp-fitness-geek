import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipsAndTricksPageRoutingModule } from './tips-and-tricks-routing.module';

import { TipsAndTricksPage } from './tips-and-tricks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipsAndTricksPageRoutingModule,
  ],
  declarations: [TipsAndTricksPage],
})
export class TipsAndTricksPageModule {}
