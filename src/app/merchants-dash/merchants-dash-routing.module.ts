import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantsDashComponent } from './merchants-dash.component';

const routes: Routes = [{ path: ' ', component: MerchantsDashComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantsDashRoutingModule {}
