import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { LadraoService } from './ladrao.service'
import { Ladrao } from './ladrao'

@Component({
  selector: 'app-ladrao',
  templateUrl: './ladrao.component.html',
  styleUrls: ['./ladrao.component.css'],
  providers: [LadraoService]
})
export class LadraoComponent implements OnInit {

  private ladrao: Ladrao = {
    nome: "",
    crime: ""
  }

  private mensagem: String;

  private ladroes: Array<Ladrao>;

  constructor(private service: LadraoService) {

  }

  ngOnInit() {
    this.reload()
  }

  private reload() {
    return this.service.getLadroes()
      .then(ladroes => this.ladroes = ladroes);
  }

  limpa() {
    this.ladrao = {
      nome: "",
      crime: ""
    }
  }

  salvar(ladrao:any) {
    if (ladrao.codigo) {
      this.service.pathLadrao(ladrao)
        .then(result => {
          this.reload()
          this.mensagem = "Alterou!!!!";
          this.limpa();
        }).catch(error => {
          this.mensagem = "Problema ao alterar: " + error
        })
    }
    else {
      this.service.postLadrao(ladrao)
        .then(result => {
          this.reload()
          this.mensagem = "Salvou!!!!";
          this.limpa();
        }).catch(error => {
          this.mensagem = "Problema ao salvar: " + error
        })
    }
  }

  deletaLadrao(ladrao:any) {
    this.service.deleteLadrao(ladrao.codigo)
      .then(() => {
        this.reload()
        this.mensagem = "Deletado com Sucesso!!!"
      })
  }

  selecionaLadrao(produto:any) {
    this.ladrao = Object.assign({}, produto);
  }

}
