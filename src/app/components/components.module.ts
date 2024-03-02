import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoginRegisterModule } from './login-register/login-register.module';
import { AccountsComponent } from './accounts/accounts.component';



@NgModule({
  declarations: [
    HomeComponent,
    AccountsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRegisterModule
  ],
  exports: [
    HomeComponent,
    SharedModule,
    LoginRegisterModule,
    AccountsComponent
  ]
})
export class ComponentsModule { }
