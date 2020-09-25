import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppImportsModule } from './app-imports-module/app-imports.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  AppImportsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
