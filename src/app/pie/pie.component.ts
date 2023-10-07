import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ChartDataService } from './pie.service';

@Component({
  selector: 'corp-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit, AfterViewInit {
  constructor(private chartDataService: ChartDataService) { }
  public chart: any;

  createChart(chartData: any) {
    this.chart = new Chart("TrusityProducts", {
      type: "pie",
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
