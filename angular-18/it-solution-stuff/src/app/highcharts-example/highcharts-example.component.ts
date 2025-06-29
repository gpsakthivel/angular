import { Component , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highcharts-example',
  standalone: true,
  imports: [
    CommonModule, 
    // HighchartsChartModule
  ],
  templateUrl: './highcharts-example.component.html',
  styleUrl: './highcharts-example.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HighchartsExampleComponent {
  title = 'myHighchart';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [50, 40, 60, 45, 70, 42, 60],
      type: 'line'
    }]
  };
}
