import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RolesComponent } from './pages/roles/roles.component';
import { UsersComponent } from './pages/users/users.component';
import { WorkgroupsComponent } from './pages/workgroups/workgroups.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'roles',
         component: RolesComponent
        //loadChildren: ()=> import('./pages/roles/roles.module').then(r=> r.RolesModule)
      },
      {
        path: 'workgroups',
        component: WorkgroupsComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
