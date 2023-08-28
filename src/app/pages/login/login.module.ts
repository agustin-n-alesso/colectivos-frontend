import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthloginComponent } from './authlogin/authlogin.component';
import { AuthregisterComponent } from './authregister/authregister.component';


@NgModule({
  declarations: [
    LoginComponent,
    AuthloginComponent,
    AuthregisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
