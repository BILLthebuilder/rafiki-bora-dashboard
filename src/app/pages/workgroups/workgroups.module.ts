import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkgroupsRoutingModule } from './workgroups-routing.module';
import { WorkgroupsComponent } from './workgroups.component';


@NgModule({
  declarations: [
    WorkgroupsComponent
  ],
  imports: [
    CommonModule,
    WorkgroupsRoutingModule
  ]
})
export class WorkgroupsModule { }
