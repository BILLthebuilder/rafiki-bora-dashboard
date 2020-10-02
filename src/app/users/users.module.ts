import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AppImportsModule } from 'src/app/app-imports-module/app-imports.module';
import { NewUserComponent } from './new-user/new-user.component';


@NgModule({
  declarations: [NewUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AppImportsModule
  ]
})
export class UsersModule { }
