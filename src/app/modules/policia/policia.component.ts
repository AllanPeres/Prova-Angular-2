import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { PoliciaService } from './policia.service'
import { Policia } from './policia'

@Component({
  selector: 'app-policia',
  templateUrl: './policia.component.html',
  styleUrls: ['./policia.component.css'],
  providers: [PoliciaService]
})
export class PoliciaComponent implements OnInit {

  private policia: Policia = {
    nome: "",
    arma: ""
  }

  private mensagem: String;

  private policiais: Array<Policia>;

  constructor(private service: PoliciaService) {

  }

  ngOnInit() {
    this.reload()
  }

  private reload() {
    return this.service.getPoliciais()
      .then(policiais => this.policiais = policiais);
  }

  limpa() {
    this.policia = {
      nome: "",
      arma: ""
    }
  }

  salvar(policia:any) {
    if (policia.codigo) {
      this.service.pathPolicia(policia)
        .then(result => {
          this.reload()
          this.mensagem = "Alterou!!!!";
          this.limpa();
        }).catch(error => {
          this.mensagem = "Problema ao alterar: " + error
        })
    }
    else {
      this.service.postPolicia(policia)
        .then(result => {
          this.reload()
          this.mensagem = "Salvou!!!!";
          this.limpa();
        }).catch(error => {
          this.mensagem = "Problema ao salvar: " + error
        })
    }
  }

  deletaPolicia(policia:any) {
    this.service.deletePolicia(policia.codigo)
      .then(() => {
        this.reload()
        this.mensagem = "Deletado com Sucesso!!!"
      })
  }

  selecionaPolicia(policia:any) {
    this.policia = Object.assign({}, policia);
  }

}
