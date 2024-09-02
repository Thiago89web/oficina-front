import { Component, Input } from '@angular/core';
import { DataObject } from '../../detalhes-ordem/detalhes-ordem.component';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})

export class DetalhesComponent {


  @Input() inputData: DataObject | null = null;

}
