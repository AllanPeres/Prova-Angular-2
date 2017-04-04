import { Injectable } from '@angular/core';
import {Http,HttpModule,JsonpModule} from "@angular/http"
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LadraoService {

  private baseUrl = 'https://provaangular2.firebaseio.com/ ';

  constructor(private http:Http) { }

  getLadroes() {
    return this.http.get(`${this.baseUrl}/ladrao.json`)
      .toPromise()
      .then(response => this.convert(response.json()));
  }

  postLadrao(ladrao:any) {
    return this.http.post(`${this.baseUrl}/ladrao.json`, ladrao)
      .toPromise()
      .then(response => this.convert(response.json()));
  }

  pathLadrao(ladrao:any) {
    let codigo = ladrao.codigo;
    delete ladrao.codigo;
    return this.http.patch(`${this.baseUrl}/ladrao/${codigo}.json`, ladrao)
      .toPromise();
  }

  deleteLadrao(codLadrao:any) {
    console.log("Service " + codLadrao)
    return this.http.delete(`${this.baseUrl}/ladrao/${codLadrao}.json`)
      .toPromise();
  }

 private convert(parsedResponse:any) {
   if (parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        codigo: id,
        nome: parsedResponse[id].nome,
        crime: parsedResponse[id].crime
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome));
   }
   return []
  }

}
