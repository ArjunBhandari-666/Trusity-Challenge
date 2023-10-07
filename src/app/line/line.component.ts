import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ChartDataService } from './line.service';

@Component({
  selector: 'corp-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit, AfterViewInit {
  constructor(private chartDataService: ChartDataService) { }
  public chart: any;

  createChart(chartData: any) {
    this.chart = new Chart("TeamTrusity", {
      type: "line",
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
