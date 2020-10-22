import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
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
import { MerchantsDashComponent } from './merchants-dash/merchants-dash.component';
import { NewMerchantComponent } from './merchants/new-merchant/new-merchant.component';
import { CustomersComponent } from './customers/customers.component';
import { NewCustomerComponent } from './customers/new-customer/new-customer.component';
import { AgentsComponent } from './agents/agents.component';
import { NewAgentComponent } from './agents/new-agent/new-agent.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { RafikiBoraService } from './services/rafiki-bora.service';
import { CoreModule } from './app-imports-module/core.module';
import { TerminalsComponent } from './terminals/terminals.component';
import { NewTerminalComponent } from './terminals/new-terminal/new-terminal.component';
import { SupportComponent } from './support/support.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AssignComponent } from './terminals/assign/assign.component';
import { CreditCardMaskPipe } from './services/credit-card-mask.pipe';

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
    MerchantsDashComponent,
    NewMerchantComponent,
    CustomersComponent,
    NewCustomerComponent,
    AgentsComponent,
    NewAgentComponent,
    ReportsComponent,
    HomeComponent,
    TerminalsComponent,
    NewTerminalComponent,
    SupportComponent,
    EditUserComponent,
    AssignComponent,
    CreditCardMaskPipe,
  ],
  imports: [
    AppImportsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [RafikiBoraService],
  bootstrap: [AppComponent],
})
export class AppModule {}
