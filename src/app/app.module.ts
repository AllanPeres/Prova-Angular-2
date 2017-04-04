import { HomeModule } from './home/home.module';
import { LadraoService } from './modules/ladrao/ladrao.service';
import { PoliciaService } from './modules/policia/policia.service';
import { AppRoutingModule } from './app.routing';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { provideRoutes} from '@angular/router';

import { AppComponent } from './app.component';
import { PoliciaComponent } from './modules/policia/policia.component';
import { LadraoComponent } from './modules/ladrao/ladrao.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [PoliciaService, LadraoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
