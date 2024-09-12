import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';
import { Contato } from 'src/app/models/contato';
import { Endereco } from 'src/app/models/endereco';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaFisica } from 'src/app/models/pessoa_fisica';
import { PessoaJuridica } from 'src/app/models/pessoa_juridica';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-create-edit-pessoa',
  templateUrl: './create-edit-pessoa.component.html',
  styleUrls: ['./create-edit-pessoa.component.scss']
})
export class CreateEditPessoaComponent implements OnInit {

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

  contato: Contato = {
    codigo: '',
    celular: '',
    telefone: '',
    cidade: '',
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

  fone = '';
  title!: string;
  titleEndereco!:string;
  titleContato!: string;

  tipoPessoas: any[]
  pessoaFisicaJuridicas: any[]
  ufs: any[]

  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateEditPessoaComponent>,
    private utilsService: UtilService
  ){}

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    this.tipoPessoas = this.utilsService.tipoPessoas;
    this.pessoaFisicaJuridicas = this.utilsService.pessoaFisicaJuridicas;
    this.ufs = this.utilsService.ufs;
    this.title = 'Cadastrar Pessoa';
    this.titleContato = 'Cadastrar Contato'
    this.titleEndereco = 'Cadastrar Endereço'

  }


  mudaTab(x: number){
    this.tabGroup.selectedIndex = x;
  }

  cancel(){
    this.dialogRef.close(true);
    //this.motivoForm.reset();
  }




}
