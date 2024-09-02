import { Component } from '@angular/core';
import { MomentTimeZoneService } from 'src/app/services/moment-time-zone.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  anoAtual: string;

  constructor (private momentTimeZoneService: MomentTimeZoneService){
    this.anoAtual = this.momentTimeZoneService.getCurrentYear();
  }


}
