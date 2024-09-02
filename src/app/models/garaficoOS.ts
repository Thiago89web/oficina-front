import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexXAxis, ApexFill, ApexTooltip, ApexStroke, ApexLegend, ApexGrid } from "ng-apexcharts";

export interface ChartOptions {
    series: ApexAxisChartSeries | any;
    chart: ApexChart | any;
    dataLabels: ApexDataLabels | any;
    plotOptions: ApexPlotOptions | any;
    yaxis?: ApexYAxis | any;
    xaxis?: ApexXAxis | any;
    fill: ApexFill | any;
    tooltip: ApexTooltip | any;
    stroke: ApexStroke | any;
    legend: ApexLegend | any;
    grid: ApexGrid | any;
    labels?: string[];
  }


export interface Dados1 {
    id?: string;
    negadas: string;
    pendentes: string;
    finalizadas: string;
    servico_peca: string;
    canceladas: string;
    outro: string;
}

export const TextResumeOs = {
    negadas: 'Negadas',
    pendentes: 'Pendentes',
    finalizadas: 'Finalizadas',
    servico_peca: 'Serviço/Peça Entregue',
    canceladas: 'Canceladas',
    outro: 'Outro'
};