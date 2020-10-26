import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { AuthService } from '../services/auth.service';
import { RafikiBoraService } from '../services/rafiki-bora.service';

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
  sale;
  deposit;
  sendMoney;
  recieveMoney;
  constructor(
    private authService: AuthService,
    private _rafikiBoraService: RafikiBoraService
  ) {}
  filters: Option[] = [
    { value: 'rafiki1', viewValue: 'Rafiki1' },
    { value: 'rafiki2', viewValue: 'Rafiki2' },
  ];
  lineChartData: ChartDataSets[] = [];

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
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  ngOnInit(): void {
    this._rafikiBoraService.getSale().subscribe((data) => {
      this.sale = data;
      const saleData = parseInt(data, 10);
      this.lineChartData.push({
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, saleData, 0, 0],
        label: 'Sales',
        borderColor: '#A8385D',
        backgroundColor: 'rgba(247, 251, 252, 0.2)',
      });
    });
    this._rafikiBoraService.getDeposits().subscribe((data) => {
      this.deposit = data;
      const depositData = parseInt(data, 10);
      this.lineChartData.push({
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, depositData, 0, 0],
        label: 'Deposits',
        backgroundColor: 'rgba(247, 251, 252, 0.2)',
        borderColor: '#7AA3E5',
      });
    });
    this._rafikiBoraService.getSendMoney().subscribe((data) => {
      this.sendMoney = data;
      const sendMoneyData = parseInt(data, 10);
      this.lineChartData.push({
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, sendMoneyData, 0, 0],
        label: 'Send Money',
        backgroundColor: 'rgba(247, 251, 252, 0.2)',
        borderColor: 'green',
      });
    });
    this._rafikiBoraService.getReciveMoney().subscribe((data) => {
      this.recieveMoney = data;
      const recieveMoneyData = parseInt(data, 10);
      this.lineChartData.push({
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, recieveMoneyData, 0, 0],
        label: 'Recieve Money',
        backgroundColor: 'rgba(247, 251, 252, 0.2)',
        borderColor: 'green',
      });
    });
    console.log(this.sale);
  }
  isAdmin() {
    return this.authService.isAdmin();
  }
}
