import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppImportsModule } from './app-imports-module/app-imports.module';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RolesComponent } from './pages/roles/roles.component';
import { WorkgroupsComponent } from './pages/workgroups/workgroups.component';
import { UsersComponent } from './pages/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { WgDetailsComponent } from './pages/workgroups/new-wg/new-wg.component';
import { NewRoleComponent } from './pages/roles/new-role/new-role.component';

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
