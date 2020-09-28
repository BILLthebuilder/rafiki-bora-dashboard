import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WgDetailsRoutingModule } from './wg-details-routing.module';
import { WgDetailsComponent } from './wg-details.component';

@NgModule({
  declarations: [ WgDetailsComponent],
  imports: [CommonModule, WgDetailsRoutingModule],
})
export class WgDetailsModule {}
