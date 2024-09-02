import { Component, Input, OnInit } from '@angular/core';
import { DataObject } from '../../detalhes-ordem/detalhes-ordem.component';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit{

  @Input() inputData: DataObject | null = null;
  status: string;

  /*totalValues = {
    valorUnit: 0,
    descPeca: 0,
    valorMObra: 0,
    descMDO: 0,
    total: 0
  };*/

  displayedColumnsCard_1: string[] = ['codigo', 'descricao', 'marca', 'categoria', 'tipoItem', 'qtde', 'valorUnit', 'descPeca', 'tempoMObra', 'valorHoraMObra', 'valorMObra', 'descMDO', 'garantia', 'kmGarantia', 'total'];
  displayedColumns: string[] = ['codigo', 'descricao', 'marca', 'categoria', 'tipoItem', 'qtde', 'valorUnit', 'descPeca', 'tempoMObra', 'valorHoraMObra', 'valorMObra', 'descMDO', 'garantia', 'kmGarantia', 'total', 'acao'];
  
  constructor(){}


  ngOnInit(): void {
    if (this.inputData) {
      this.status = this.inputData.nameStatus;
    }
  }
  
  
  dataSource = [
    {codigo: '001', descricao: 'Produto A', marca: 'Marca X', categoria: 'Categoria 1', 
      tipoItem: 'Tipo 1', qtde: 10, valorUnit: 100, descPeca: 5, tempoMObra: '2h', valorHoraMObra: 50, 
      valorMObra: 100, descMDO: 10, garantia: '12 meses', kmGarantia: '10000 KM', total: 1100},
    {codigo: '002', descricao: 'Produto B', marca: 'Marca Y', categoria: 'Categoria 2', 
      tipoItem: 'Tipo 2', qtde: 5, valorUnit: 200, descPeca: 10, tempoMObra: '3h', 
      valorHoraMObra: 60, valorMObra: 180, descMDO: 15, garantia: '24 meses', kmGarantia: '20000 KM', total: 1600}
  ];


  totals = {
    valorUnit: this.dataSource.reduce((sum, item) => sum + item.valorUnit, 0),
    descPeca: this.dataSource.reduce((sum, item) => sum + item.descPeca, 0),
    valorMObra: this.dataSource.reduce((sum, item) => sum + item.valorMObra, 0),
    descMDO: this.dataSource.reduce((sum, item) => sum + item.descMDO, 0),
    total: this.dataSource.reduce((sum, item) => sum + item.total, 0)
  };

}
