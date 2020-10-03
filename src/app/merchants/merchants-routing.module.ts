import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantsComponent } from './merchants.component';

const routes: Routes = [{ path: ' ', component: MerchantsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantsRoutingModule {}
