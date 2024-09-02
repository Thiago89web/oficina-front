import { Component, OnInit } from '@angular/core';

export interface DataObject {
  nome: string;
  nameStatus: string;
}


@Component({
  selector: 'app-detalhes-ordem',
  templateUrl: './detalhes-ordem.component.html',
  styleUrls: ['./detalhes-ordem.component.scss']
})
export class DetalhesOrdemComponent implements OnInit {

  selectedComponent = 'detalhes';

  constructor(
  ){}
 
  ngOnInit(): void {
    
  }

  objPas: DataObject = {
    nome: 'Nome Exemplo',
    nameStatus: 'orcamentacao_respondida1'
  };

  changeComponent(componentName: string) {
    this.selectedComponent = componentName;
  }

}
