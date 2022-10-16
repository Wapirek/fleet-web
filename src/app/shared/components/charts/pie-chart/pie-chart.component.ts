import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ColorDictionary } from 'src/app/shared/components/charts/_dict/color.dictionary';
import Chart from 'chart.js/auto';

@Component({
  selector: 'shared-pie-chart',
  template: `<div class="chart-container" *ngIf="data?.id"><canvas [id]="data?.id">{{chart}}</canvas></div>`
})
export class PieChartComponent implements AfterViewInit {

  @Input() data: { id: string; } | undefined;

  chart: any;

  colorDictionary = ColorDictionary;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {

    if (!this.data?.id) { return; }

    this.chart = new Chart(this.data?.id, {
      type: 'doughnut', //this denotes tha type of chart

      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            this.colorDictionary.lightBlue,
            this.colorDictionary.pastelPink,
            this.colorDictionary.purple
          ],
          hoverOffset: 4
        }]
      },
    });
    this.changeDetectorRef.detectChanges();
  }
}
