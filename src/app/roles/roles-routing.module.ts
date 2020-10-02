import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRoleComponent } from './new-role/new-role.component';
import { RolesComponent } from './roles.component';

const routes: Routes = [
  {
    path: ' ',
    component: RolesComponent,
  },
  { path: 'new-role', component: NewRoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesRoutingModule {}
