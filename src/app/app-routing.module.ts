import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { WelcomeComponent } from './welcome/welcome.component';

//Define Layout
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';


const routes: Routes = [
  //Site routes goes here 
  { 
    path: '', 
    component: SiteLayoutComponent,
    children: [
      { path: '', component: WelcomeComponent, pathMatch: 'full'},
      { path: 'welcome', component: WelcomeComponent },
    ]
},

  //no layout routes
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },

  // otherwise redirect to home
  { path: '', component: LoginComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
