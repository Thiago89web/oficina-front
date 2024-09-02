import { Injectable } from "@angular/core";
import * as moment from "moment-timezone";


@Injectable({
    providedIn: 'root'
  })
  export class MomentTimeZoneService {
  
    constructor() { }
  
    getMaxBirthDate(): string {
        const dataAtual = moment().tz('America/Manaus');
        const anoAtual = dataAtual.year();
        const anoMaximoPermitido = anoAtual + 5;
        return `${anoMaximoPermitido}-12-31`;
    }

    getCurrentDate(): string {
      return moment().tz('America/Manaus').format('YYYY-MM-DD');
    }

    getCurrentMonthStartDate(): string {
      return moment().tz('America/Manaus').startOf('month').format('YYYY-MM-DD');
    }

    getCurrentYear(): string {
      return moment().tz('America/Manaus').startOf('year').format('YYYY');
    }
    
  }