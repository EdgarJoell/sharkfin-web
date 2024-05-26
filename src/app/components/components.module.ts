import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { BrowseComponent } from './browse/browse.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    AccountsComponent,
    BrowseComponent,
    RecommendationsComponent,
    LoginRegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    SharedModule,
    AccountsComponent,
    BrowseComponent,
    RecommendationsComponent,
    LoginRegisterComponent
  ]
})
export class ComponentsModule { }
