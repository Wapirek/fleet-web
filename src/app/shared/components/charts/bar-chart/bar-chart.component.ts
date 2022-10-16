import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';
import Chart from 'chart.js/auto';
import { ColorDictionary } from 'src/app/shared/components/charts/_dict/color.dictionary';

@Component({
  selector: 'shared-bar-chart',
  template: `<div class="chart-container" *ngIf="data?.id"><canvas [id]="data?.id">{{chart}}</canvas></div>`
})
export class BarChartComponent implements AfterViewInit {

  @Input() data: { id: string; } | undefined;

  chart: any;

  colorDictionary = ColorDictionary;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {

    if (!this.data?.id) { return; }

    this.chart = new Chart(this.data?.id, {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
        datasets: [
          {
            label: "Wydatki",
            data: ['467','576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: this.colorDictionary.purple
          },
          {
            label: "Przychody",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: this.colorDictionary.coolBlue
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
    });
    this.changeDetectorRef.detectChanges();
  }
}
