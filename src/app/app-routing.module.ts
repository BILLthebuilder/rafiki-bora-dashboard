import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NewRoleComponent } from './pages/roles/new-role/new-role.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsersComponent } from './pages/users/users.component';
import { WgDetailsComponent } from './pages/workgroups/new-wg/new-wg.component';
import { WorkgroupsComponent } from './pages/workgroups/workgroups.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'roles',
        children: [
          {
            path: 'new-role',
            component: NewRoleComponent,
          },
          {
            path: '',
            component: RolesComponent,
          },
        ],
      },
      {
        path: 'workgroups',
        component: WorkgroupsComponent,
      },
      {
        path: 'workgroups',
        children: [
          {
            path: 'new-wg',
            component: WgDetailsComponent,
          },
          {
            path: '',
            component: WorkgroupsComponent,
          },
        ],
      },
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
