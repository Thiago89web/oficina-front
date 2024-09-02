import { Component, Input, OnInit } from '@angular/core';
import { DataObject } from '../../detalhes-ordem/detalhes-ordem.component';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  @Input() inputData: DataObject | null = null;
  nome: string = '';

  constructor(){}

  ngOnInit(): void {
    if (this.inputData) {
      this.nome = this.inputData.nome;
    }
  }

}
