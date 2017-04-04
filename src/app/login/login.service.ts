import { Router, ActivatedRoute } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user';

declare var window:any;

@Injectable()
export class LoginService {

    public static ultimaRota: String;

    constructor(private rota: Router, private rotaAtiva: ActivatedRoute) { }

    doLogin(user: User) {
        
        if (user.login == 'angular2' && user.pass == '123') {

            user.token  = Math.random.toString();

            window.localStorage.setItem('user', JSON.stringify(user));

            const destination = this.rotaAtiva.snapshot.queryParams['destination'] || '/home';
          
            this.rota.navigate([destination]);

        } else {
               console.log("err");
               this.rota.navigate(['/login']);
               }

        }

    }