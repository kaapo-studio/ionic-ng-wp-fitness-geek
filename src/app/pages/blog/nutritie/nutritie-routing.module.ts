import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutritiePage } from './nutritie.page';

const routes: Routes = [
  {
    path: '',
    component: NutritiePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutritiePageRoutingModule {}
