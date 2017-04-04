import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LadraoComponent } from './ladrao.component';

const appRoutes: Routes = [
  { path: 'lista', component: LadraoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule
  ],
  declarations: [LadraoComponent]
})
export class LadraoModule { }
