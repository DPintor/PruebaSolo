import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeraPage } from './primera.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeraPageRoutingModule {}
