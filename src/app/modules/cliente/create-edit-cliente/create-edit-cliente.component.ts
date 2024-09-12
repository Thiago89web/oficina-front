import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { Endereco } from 'src/app/models/endereco';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaFisica } from 'src/app/models/pessoa_fisica';
import { PessoaJuridica } from 'src/app/models/pessoa_juridica';

@Component({
  selector: 'app-create-edit-cliente',
  templateUrl: './create-edit-cliente.component.html',
  styleUrls: ['./create-edit-cliente.component.scss']
})
export class CreateEditClienteComponent implements OnInit {

  pessoa: Pessoa = {
    codigo: '',
    nome: '',
    email: '',
    site: '',
    codigo_endereco: '',
    tipoPessoa: ''
  }

  endereco: Endereco = {
    codigo: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    uf: '',
    cep: '',
    numero: '',
    complemento: '',
    cod_pessoa: ''
  }

  pessoaJuridica: PessoaJuridica = {
    codigo: '',
    cnpj: '',
    razao_social: '',
    nome_fantasia: '',
    inscricao_estadual: '',
    inscricao_municipal: '',
    cod_pessoa: ''
  }

  pessoaFisica: PessoaFisica = {
    codigo: '',
    cpf: '',
    rg: '',
    data_nascimento: '',
    sexo: '',
    nacionalidade: '',
    naturalidade: '',
    nome_pai: '',
    nome_mae: '',
    cod_pessoa: ''
  }


  ngOnInit(): void {
    
  }

}
