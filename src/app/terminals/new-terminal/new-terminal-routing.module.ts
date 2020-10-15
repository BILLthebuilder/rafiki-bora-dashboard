import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTerminalComponent } from './new-terminal.component';

const routes: Routes = [{ path: '', component: NewTerminalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTerminalRoutingModule {}
