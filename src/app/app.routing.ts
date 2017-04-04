import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import {AuthGuard} from './guards/auth.guards'
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'ladrao', loadChildren: './modules/ladrao/ladrao.module#LadraoModule', canActivate: [AuthGuard]},
  { path: 'policia', loadChildren: './modules/policia/policia.module#PoliciaModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
