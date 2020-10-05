import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppImportsModule } from './app-imports-module/app-imports.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RolesComponent } from './roles/roles.component';
import { WorkgroupsComponent } from './workgroups/workgroups.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { WgDetailsComponent } from './workgroups/new-wg/new-wg.component';
import { NewRoleComponent } from './roles/new-role/new-role.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { MerchantsComponent } from './merchants/merchants.component';
// import { MerchantsDashComponent } from './merchants-dash/merchants-dash.component';
import { NewMerchantComponent } from './merchants/new-merchant/new-merchant.component';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './customers/new-customer/new-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    WorkgroupsComponent,
    UsersComponent,
    LoginComponent,
    DashboardComponent,
    WgDetailsComponent,
    NewRoleComponent,
    NewUserComponent,
    MerchantsComponent,
    // MerchantsDashComponent,
    NewMerchantComponent,
    CustomersComponent,
    NewCustomerComponent,
  ],
  imports: [
    AppImportsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
