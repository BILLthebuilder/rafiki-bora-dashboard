import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { AuthService } from '../services/auth.service';

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
  constructor(private authService: AuthService) {}
  filters: Option[] = [
    { value: 'rafiki1', viewValue: 'Rafiki1' },
    { value: 'rafiki2', viewValue: 'Rafiki2' },
  ];
  lineChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0], label: 'Sales' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0], label: 'Deposits' },
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0], label: 'Withdrawals' },
  ];

  lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(247, 251, 252, 0.2)',
      borderColor: '#A8385D',
    },
    {
      backgroundColor: 'rgba(247, 251, 252, 0.2)',
      borderColor: '#7AA3E5',
    },
    {
      backgroundColor: 'rgba(247, 251, 252, 0.2)',
      borderColor: 'green',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  ngOnInit(): void {}
  isAdmin() {
    return this.authService.isAdmin();
  }
}
