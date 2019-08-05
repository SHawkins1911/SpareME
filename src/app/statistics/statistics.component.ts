import { Component, OnInit, ViewChild } from '@angular/core';
import { League } from '../league';
import { StatisticsService } from '../statistics.service';
import { Chart, ChartOptions, ChartDataSets } from 'chart.js';
import { BaseChartDirective, Label, Color } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  leagues: League[];
  averages= [];
  chartOptions = {
    responsive: true
  };

  chartData = [];

  chartLabels = [];

  constructor(private statsService: StatisticsService) {
  }

  ngOnInit() {    
    this.leagues = this.statsService.leagues;

    this.averages = [{data: this.leagues.map((league) => {
      return  this.mean(league.scores);
    })}];

    this.chartData = this.averages;
    this.chartLabels = this.leagues.map(league => league.name);

  }

  mean(numbersArr): number
  {
    let arrLen = numbersArr.length;
    if (arrLen > 0) {
        let sum: number = 0;
        for (let i of numbersArr) {
            sum += i;
        }
        return sum/arrLen;
    }
    else return 0;
  }

}
