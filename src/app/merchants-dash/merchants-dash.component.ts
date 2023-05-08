import {Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RafikiBoraService } from '../services/rafiki-bora.service';
import { ChartDataset,Chart,registerables } from 'chart.js';
import { combineLatest, map } from 'rxjs';


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
  sale = 500;
  deposit = 400;
  sendMoney = 560;
  receiveMoney = 900;
  constructor(
    private authService: AuthService,
    private _rafikiBoraService: RafikiBoraService,
  ) {
    Chart.register(...registerables);
  }
  filters: Option[] = [
    { value: 'rafiki1', viewValue: 'Rafiki1' },
    { value: 'rafiki2', viewValue: 'Rafiki2' },
  ];
  lineChartData: ChartDataset[] = [];
  public chart: any;
  dataset = [];

  ngOnInit(): void {
    this.createChart();
  }
  isAdmin() {
    return this.authService.isAdmin();
  }
  createChart() {
    combineLatest({
      sale: this._rafikiBoraService.getSale(),
      deposits: this._rafikiBoraService.getDeposits(),
      sendMoney: this._rafikiBoraService.getSendMoney(),
      receiveMoney: this._rafikiBoraService.getReciveMoney(),
    })
      .pipe(
        map((response) => {
          this.sale = response.sale;
          this.deposit = response.deposits;
          this.sendMoney = response.sendMoney;
          this.receiveMoney = response.receiveMoney;
          const result: any[] = [];

          result.push(
            this.sale,
            this.deposit,
            this.sendMoney,
            this.receiveMoney
          );
          return result;
        })
      )
      .subscribe((data) => {
        this.chart = new Chart('MyChart', {
          type: 'line',
          data: {
            labels: [
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
            ],
            datasets: [
              {
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, data[0], 0, 0],
                label: 'Sales',
                borderColor: '#A8385D',
                backgroundColor: 'rgba(247, 251, 252, 0.2)',
              },
              {
                data: [0, 0, 0, 0, 0, 0, 0, 0, data[1], 0, 0, 0],
                label: 'Deposits',
                backgroundColor: 'rgba(247, 251, 252, 0.2)',
                borderColor: '#7AA3E5',
              },
              {
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, data[2], 0],
                label: 'Send Money',
                backgroundColor: 'rgba(247, 251, 252, 0.2)',
                borderColor: 'green',
              },
              {
                data: [0, 0, 0, 0, 0, 0, data[3], 0, 0, 0, 0, 0],
                label: 'Recieve Money',
                backgroundColor: 'rgba(247, 251, 252, 0.2)',
                borderColor: 'green',
              },
            ],
          },
          options: {
            aspectRatio: 2.5,
          },
        });
      });
  }
}

