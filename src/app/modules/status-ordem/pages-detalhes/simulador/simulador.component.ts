import { Component } from '@angular/core';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss']
})
export class SimuladorComponent {
  displayedColumns: string[] = [
    'codigo', 'descricao', 'marca', 'qtde', 
    'valorPeca', 'valorPecaDesc', 'valorMdo', 
    'valorMdoDesc', 'valorTotalNF', 'valorTotal'
  ];

  dataSource = [
    { codigo: '001', descricao: 'Item 1', marca: 'Marca A', qtde: 10, valorPeca: 100, valorPecaDesc: 90, valorMdo: 50, valorMdoDesc: 45, valorTotalNF: 140, valorTotal: 145 },
    { codigo: '002', descricao: 'Item 2', marca: 'Marca B', qtde: 5, valorPeca: 200, valorPecaDesc: 180, valorMdo: 80, valorMdoDesc: 70, valorTotalNF: 250, valorTotal: 260 }
  ];

  totals = {
    valorPeca: this.dataSource.reduce((acc, item) => acc + item.valorPeca, 0),
    valorPecaDesc: this.dataSource.reduce((acc, item) => acc + item.valorPecaDesc, 0),
    valorMdo: this.dataSource.reduce((acc, item) => acc + item.valorMdo, 0),
    valorMdoDesc: this.dataSource.reduce((acc, item) => acc + item.valorMdoDesc, 0),
    valorTotalNF: this.dataSource.reduce((acc, item) => acc + item.valorTotalNF, 0),
    valorTotal: this.dataSource.reduce((acc, item) => acc + item.valorTotal, 0),
  };

}
