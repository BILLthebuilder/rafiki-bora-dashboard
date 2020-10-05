import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantsRoutingModule } from './merchants-routing.module';
import { NewMerchantComponent } from './new-merchant/new-merchant.component';


@NgModule({
  declarations: [NewMerchantComponent],
  imports: [
    CommonModule,
    MerchantsRoutingModule
  ]
})
export class MerchantsModule { }
