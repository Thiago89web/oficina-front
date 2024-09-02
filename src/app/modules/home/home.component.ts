import { Component, OnInit } from '@angular/core';
import { ChartOptions, Dados1, TextResumeOs } from './../../models/garaficoOS';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pieChartOptions1: Partial<ChartOptions>;
  public pieChartOptions2: Partial<ChartOptions>;

  ngOnInit(): void {
    this.exemplo();
  }

  exemplo() {
    const exampleData = [
      { id: "1", negadas: "10", pendentes: "15", finalizadas: "20", servico_peca: "5", canceladas: "7", outro: "8" },
      { id: "2", negadas: "12", pendentes: "18", finalizadas: "22", servico_peca: "6", canceladas: "9", outro: "10" },
      { id: "3", negadas: "14", pendentes: "20", finalizadas: "18", servico_peca: "7", canceladas: "10", outro: "12" }
    ];

    this.transformDataForChartPie1(exampleData);
  }

  transformDataForChartPie1(data: Dados1[]): void {
    const propertyTotals: Record<string, number> = data.reduce((acc, item) => {
      const properties = ['negadas', 'pendentes', 'finalizadas', 'servico_peca', 'canceladas', 'outro'];

      properties.forEach(prop => {
        const value = parseInt(item[prop], 10);
        if (!isNaN(value)) {
          acc[prop] = (acc[prop] || 0) + value;
        }
      });

      return acc;
    }, {} as Record<string, number>);

    const total = Object.values(propertyTotals).reduce((sum, value) => sum + value, 0);

    //const series = Object.values(propertyTotals).map(value => (total > 0 ? (value / total) * 100 : 0));
    const series = Object.values(propertyTotals);
    const labels = Object.keys(propertyTotals);

    this.pieChartOptions1 = {
      series: series as number[],
      chart: {
        type: 'pie',
        fontFamily: 'Poppins, sans-serif',
        height: 320,
        toolbar: {
          show: true,
          tools: {
            download: true
          }
        }
      },
      labels: labels.map(label => TextResumeOs[label] || label),
      legend: {
        show: true,
        position: 'bottom'
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        theme: 'dark',
        custom: ({ seriesIndex }: { seriesIndex: number }) => {
          const label = labels[seriesIndex];
          const value = series[seriesIndex];
          const percentage = total > 0 ? (value / total) * 100 : 0;
          return `
            <div style="padding: 5px; font-size: 12px;">
              <strong>${TextResumeOs[label] || label}</strong><br>
              Total: ${value} (${percentage.toFixed(1)}%)<br>
            </div>
          `;
        }
      }
    };
  }
}
