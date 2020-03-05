import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeraPageRoutingModule } from './primera-routing.module';

import { PrimeraPage } from './primera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeraPageRoutingModule
  ],
  declarations: [PrimeraPage]
})
export class PrimeraPageModule {}
