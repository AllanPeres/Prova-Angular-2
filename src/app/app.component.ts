import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  logout() {
    window.localStorage.removeItem('user');
    window.location.reload();
  }

  estaLogado() {
    return window.localStorage.getItem('user');
  }



}