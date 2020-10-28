import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from './agents/agents.component';
import { NewAgentComponent } from './agents/new-agent/new-agent.component';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './customers/new-customer/new-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MerchantsDashComponent } from './merchants-dash/merchants-dash.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { NewMerchantComponent } from './merchants/new-merchant/new-merchant.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReportsComponent } from './reports/reports.component';
import { NewRoleComponent } from './roles/new-role/new-role.component';
import { RolesComponent } from './roles/roles.component';
import { SupportComponent } from './support/support.component';
import { AssignAComponent } from './terminals/assign-a/assign-a.component';
import { AssignComponent } from './terminals/assign/assign.component';
import { NewTerminalComponent } from './terminals/new-terminal/new-terminal.component';
import { TerminalsComponent } from './terminals/terminals.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
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
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'roles',
        canActivate: [AdminGuard],
        data: { role: 'ROLE_ADMIN' },
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
        path: 'terminals',
        children: [
          {
            path: 'new-terminal',
            canActivate: [AdminGuard],
            data: { role: 'ROLE_ADMIN' },
            component: NewTerminalComponent,
          },
          {
            path: 'assign',
            canActivate: [AdminGuard],
            data: { role: 'ROLE_ADMIN' },
            component: AssignComponent,
          },
          {
            path: 'assign-agent',
            component: AssignAComponent,
          },
          {
            path: '',
            canActivate: [AdminGuard],
            data: { role: 'ROLE_ADMIN' },
            component: TerminalsComponent,
          },
        ],
      },
      {
        path: 'support',
        canActivate: [AdminGuard],
        data: { role: 'ROLE_ADMIN' },
        component: SupportComponent,
      },
      {
        path: 'workgroups',
        canActivate: [AdminGuard],
        data: { role: 'ROLE_ADMIN' },
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
            canActivate: [AdminGuard],
            data: { role: 'ROLE_ADMIN' },
            component: NewUserComponent,
          },
          {
            path: 'edit/:id',
            component: EditUserComponent,
          },
          {
            path: '',
            canActivate: [AdminGuard],
            data: { role: 'ROLE_ADMIN' },
            component: UsersComponent,
          },
        ],
      },
      {
        path: 'merchants',
        canActivate: [AdminGuard],
        data: { role: 'ROLE_ADMIN' },
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
        canActivate: [AdminGuard],
        data: { role: 'ROLE_ADMIN' },
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

      {
        path: 'agents',
        children: [
          {
            path: 'new-agent',
            canActivate: [AdminGuard],
            data: { role: 'ROLE_MERCHANT' },
            component: NewAgentComponent,
          },
          {
            path: '',
            component: AgentsComponent,
          },
        ],
      },
      {
        path: 'reports',
        children: [
          {
            path: '',
            component: ReportsComponent,
          },
        ],
      },
    ],
  },
  {
    path: '**',
    component: NotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
