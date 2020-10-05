import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-merchants-dash',
  templateUrl: './merchants-dash.component.html',
  styleUrls: ['./merchants-dash.component.scss'],
})
export class MerchantsDashComponent implements OnInit {
  filters: Option[] = [
    { value: 'rafiki1', viewValue: 'Rafiki1' },
    { value: 'rafiki2', viewValue: 'Rafiki2' },
  ];
  lineChartData: ChartDataSets[] = [
    { data: [1, 5, 4, 6, 4, 5], label: 'Sales' },
    { data: [2, 4, 3, 5, 3, 6], label: 'Deposits' },
    { data: [3, 4, 6, 4, 2, 4], label: 'Withdrawals' },
  ];

  lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  lineChartOptions = {
    // responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#A8385D',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor() { }

  ngOnInit(): void { }
}
