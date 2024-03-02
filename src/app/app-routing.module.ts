import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { BrowseComponent } from './components/browse/browse.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { AccountsComponent } from './components/accounts/accounts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginRegisterComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'account', component: AccountsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
