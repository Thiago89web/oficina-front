
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteOS } from 'src/app/models/teste/cliente_os';

@Component({
  selector: 'app-cliente-os',
  templateUrl: './cliente-os.component.html',
  styleUrls: ['./cliente-os.component.scss']
})
export class ClienteOsComponent {

  ELEMENT_DATA: ClienteOS[] = [
    {
      id: 1,
      cod_cliente: '9500',
      cliente: 'INSTITUTO DE ASSISTENCIA TECNICA E EXTENSAO RURAL DO ESTADO DE RORAIMA IATER',
      os: '123',
      placa: 'ABC-1234',
      data_entrega: '2024-08-07',
      valor_total: '1.200,00',
    },
    {
      id: 1,
      cod_cliente: '9600',
      cliente: 'INSTITUTO DE ASSISTENCIA TECNICA E EXTENSAO RURAL DO ESTADO DE RORAIMA IATER',
      os: '145',
      placa: 'ABC-1235',
      data_entrega: '2024-08-07',
      valor_total: '1.300,00',
    }
  ];

  displayedColumns: string[] = ['cod_cliente', 'cliente', 'os', 'placa', 'data_entrada', 'valor_total', 'acoes'];
  dataSource = new MatTableDataSource<ClienteOS>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

}
