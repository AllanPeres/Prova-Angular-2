import { Injectable } from '@angular/core';
import {Http,HttpModule,JsonpModule} from "@angular/http"
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PoliciaService {

  private baseUrl = 'https://provaangular2.firebaseio.com/ ';

  constructor(private http:Http) { }

  getPoliciais() {
    return this.http.get(`${this.baseUrl}/policia.json`)
      .toPromise()
      .then(response => this.convert(response.json()));
  }

  postPolicia(policia:any) {
    return this.http.post(`${this.baseUrl}/policia.json`, policia)
      .toPromise()
      .then(response => this.convert(response.json()));
  }

  pathPolicia(policia:any) {
    let codigo = policia.codigo;
    delete policia.codigo;
    return this.http.patch(`${this.baseUrl}/policia/${codigo}.json`, policia)
      .toPromise();
  }

  deletePolicia(codPolicia:any) {
    console.log("Service " + codPolicia)
    return this.http.delete(`${this.baseUrl}/policia/${codPolicia}.json`)
      .toPromise();
  }


 private convert(parsedResponse:any) {
   if (parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        codigo: id,
        nome: parsedResponse[id].nome,
        arma: parsedResponse[id].arma
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome));
   }
   return []
  }

}
