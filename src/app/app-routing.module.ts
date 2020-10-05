import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './customers/new-customer/new-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MerchantsDashComponent } from './merchants-dash/merchants-dash.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { NewMerchantComponent } from './merchants/new-merchant/new-merchant.component';
import { NewRoleComponent } from './roles/new-role/new-role.component';
import { RolesComponent } from './roles/roles.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { UsersComponent } from './users/users.component';
import { WgDetailsComponent } from './workgroups/new-wg/new-wg.component';
import { WorkgroupsComponent } from './workgroups/workgroups.component';

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
        children: [
          {
            path: 'new-user',
            component: NewUserComponent,
          },
          {
            path: '',
            component: UsersComponent,
          },
        ],
      },
      {
        path: 'merchants',
        children: [
          {
            path: 'new-merchant',
            component: NewMerchantComponent,
          },
          {
            path: '',
            component: MerchantsComponent,
          },
        ],
      },

      {
        path: 'customers',
        children: [
          {
            path: 'new-customer',
            component: NewCustomerComponent,
          },
          {
            path: '',
            component: CustomersComponent,
          },
        ],
      },
      {
        path: 'merchants-dash',
        component: MerchantsDashComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
