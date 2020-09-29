import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WgDetailsComponent } from './wg-details.component';

const routes: Routes = [{ path: ' ', component: WgDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WgDetailsRoutingModule {}
