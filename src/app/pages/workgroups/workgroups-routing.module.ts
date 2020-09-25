import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkgroupsComponent } from './workgroups.component';

const routes: Routes = [
  {path: ' ', component: WorkgroupsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkgroupsRoutingModule { }
