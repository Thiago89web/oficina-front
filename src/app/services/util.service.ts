import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  imprimirComEspacos(lista: string[]): string {
    let resultado: string = '';

    for (let i = 0; i < lista.length; i++) {
        resultado += lista[i];
        if (i < lista.length - 1) {
            resultado += ', ';
        }
    }
    return resultado;
  }

  tipoStatus = [
    { valor: 1, label: 'AGUARDANDO ORÇAMENTO'},
    { valor: 2, label: 'AGUARDANDO COTAÇÃO'},
    { valor: 3, label: 'ORÇAMENTAÇÃO RESPONDIDA'},
    { valor: 4, label: 'AGUARDANDO COTAÇÃO'},
    { valor: 5, label: 'SERVIÇO/PEÇAS ENTREGUE'},
    { valor: 6, label: 'APROVADA'},   
    { valor: 7, label: 'FINALIZADA'},
    { valor: 8, label: 'NEGADA'},
    { valor: 9, label: 'SERVICO REJEITADO'},
    { valor: 10, label: 'CANCELADA'},
    { valor: 11, label: 'REAVALIAR'},
    { valor: 12, label: 'OS INCOMPLETA'},
    { valor: 12, label: 'PENDENTE'},
    { valor: 12, label: 'PENDENTE AB.CLIENTE'},
  ]

  ufs = [
    {valor: "AC", label: "AC"},
    {valor: "AL", label: "AL"},
    {valor: "AP", label: "AP"},
    {valor: "AM", label: "AM"},
    {valor: "BA", label: "BA"},
    {valor: "CE", label: "CE"},
    {valor: "DF", label: "DF"},
    {valor: "ES", label: "ES"},
    {valor: "GO", label: "GO"},
    {valor: "MA", label: "MA"},
    {valor: "MT", label: "MT"},
    {valor: "MS", label: "MS"},
    {valor: "MG", label: "MG"},
    {valor: "PA", label: "PA"},
    {valor: "PB", label: "PB"},
    {valor: "PR", label: "PR"},
    {valor: "PE", label: "PE"},
    {valor: "PI", label: "PI"},
    {valor: "RJ", label: "RJ"},
    {valor: "RN", label: "RN"},
    {valor: "RS", label: "RS"},
    {valor: "RO", label: "RO"},
    {valor: "RR", label: "RR"},
    {valor: "SC", label: "SC"},
    {valor: "SP", label: "SP"},
    {valor: "SE", label: "SE"},
    {valor: "TO", label: "TO"}
 ]

}
