import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'percentFormatter'
  })
  export class PercentFormatterPipe implements PipeTransform {
  
    transform(value: string | number): string {
      if (typeof value === 'string') {
        value = parseFloat(value.replace('%', '').replace(',', '.'));
      }
      return `${value.toFixed(2).replace('.', ',')}%`;
    }
  }