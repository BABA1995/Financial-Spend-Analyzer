import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { FinancialService } from 'src/services/financial.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  labels = ['January', 'February', 'March', 'April', 'May', 'june', 'July'];
  expenses: any = [];
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;
  constructor(public financial: FinancialService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    let labl: any;

    this.financial.get().subscribe((res) => {
      labl = res.map((o: any) => {
        return {
          month: o.month,
          amount: o.Transaction.amount,
        };
      });
      this.labels.forEach((m: any) => {
        let total = labl.reduce((a: any, b: any) => {
          return b.month == m ? a + b.amount : a;
        }, 0);
        this.expenses.push(total);
      });
    });
  }
  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Monthly Expenses',
            data: this.expenses,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            max: 60000,
            min: 1000,
            ticks: {
              stepSize: 1000,
            },
          },
        },
      },
    });
  }
}
