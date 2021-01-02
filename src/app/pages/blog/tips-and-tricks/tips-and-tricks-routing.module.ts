import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipsAndTricksPage } from './tips-and-tricks.page';

const routes: Routes = [
  {
    path: '',
    component: TipsAndTricksPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipsAndTricksPageRoutingModule {}
