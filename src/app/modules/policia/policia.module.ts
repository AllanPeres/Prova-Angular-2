import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoliciaComponent } from './policia.component';

const appRoutes: Routes = [
  { path: 'lista', component: PoliciaComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule
  ],
  declarations: [PoliciaComponent]
})
export class PoliciaModule { }
