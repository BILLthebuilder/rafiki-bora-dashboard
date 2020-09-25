import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppImportsModule } from './app-imports-module/app-imports.module';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
  AppImportsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
