import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StatusOrdem } from 'src/app/models/teste/ordem_os';

@Component({
  selector: 'app-lista-status-ordem',
  templateUrl: './lista-status-ordem.component.html',
  styleUrls: ['./lista-status-ordem.component.scss']
})
export class ListaStatusOrdemComponent {

  //ELEMENT_DATA: StatusOrdem[] = []

  ELEMENT_DATA: StatusOrdem[] = [
    {
      id: 1,
      cod_cliente: '9500',
      num_os: '12345',
      status_os: 'AGUARDANDO ORÇAMENTO',
      ident_veiculo: 'ABC-1234',
      data: '2024-08-07',
      razao_cliente: 'INSTITUTO DE ASSISTENCIA TECNICA E EXTENSAO RURAL DO ESTADO DE RORAIMA IATER',
      unidade_cliente: 'DATER',
      prazo_resposta: 'Indeterminado',
      tempo_restante: 'Indeterminado', 
    },
    {
      id: 2,
      cod_cliente: '8747',
      num_os: '67890',
      status_os: 'AGUARDANDO ORÇAMENTO',
      ident_veiculo: 'XYZ-5678',
      data: '2024-08-06',
      razao_cliente: 'Cliente B',
      unidade_cliente: 'Unidade 2',
      prazo_resposta: 'Indeterminado',
      tempo_restante: 'Indeterminado',
    }
  ];

  displayedColumns: string[] = ['cod_cliente', 'num_os', 'status_os', 'ident_veiculo', 'data', 'razao_cliente', 'unidade_cliente', 'prazo_resposta', 'tempo_restante', 'acoes'];
  dataSource = new MatTableDataSource<StatusOrdem>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

}
