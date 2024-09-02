import { Component } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent {

  displayedColumns: string[] = ['os', 'data', 'hora', 'descricao', 'usuario', 'ipUsuario'];
  dataSource = [
    {os: '001', data: '10/08/2024', hora: '10:00', descricao: 'Descrição A', usuario: 'User1', ipUsuario: '192.168.0.1'},
    {os: '002', data: '11/08/2024', hora: '11:00', descricao: 'Descrição B', usuario: 'User2', ipUsuario: '192.168.0.2'}
  ];

}
