import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRoleComponent } from './new-role.component';

const routes: Routes = [{ path: '', component: NewRoleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRoleRoutingModule {}
