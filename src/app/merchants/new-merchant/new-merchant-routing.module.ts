import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewMerchantComponent } from './new-merchant.component';

const routes: Routes = [{ path: ' ', component: NewMerchantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMerchantRoutingModule {}
