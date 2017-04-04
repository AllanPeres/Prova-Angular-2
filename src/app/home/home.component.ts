import { Component, OnInit } from '@angular/core';
import { LadraoService } from './../modules/ladrao/ladrao.service'
import { PoliciaService } from './../modules/policia/policia.service'


@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  qtdPoliciais:number;
  qtdLadroes:number;

  constructor(
    private policiaService: PoliciaService,
    private ladraoService: LadraoService

  ) { }

  ngOnInit() {
    this.policiaService.getPoliciais().then((value) => {
      this.qtdPoliciais = value.length;
    })
    this.ladraoService.getLadroes().then((value) => {
      this.qtdLadroes = value.length;
    })
  }
}