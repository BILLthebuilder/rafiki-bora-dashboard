import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignAComponent } from './assign-a.component';

const routes: Routes = [{ path: '', component: AssignAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignARoutingModule {}
