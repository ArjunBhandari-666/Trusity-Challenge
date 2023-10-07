import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ChartDataService } from './bar.service';

@Component({
  selector: 'corp-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit, AfterViewInit {
  constructor(private chartDataService: ChartDataService) { }
  public chart: any;

  createChart(chartData: any) {
    this.chart = new Chart("TrusityFinancials", {
      type: "bar",
      data: chartData
    });
  }

  ngOnInit(): void {
    this.chartDataService.getChartData().subscribe(chartData => {
      this.createChart(chartData); // Create the chart when data is available
    });
  }

  ngAfterViewInit(): void {
    // You can optionally put chart-related code here if needed.
  }
}
