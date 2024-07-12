import { Component, Inject } from '@angular/core';
import { OlympicsService } from '../../core/services/olympics.service';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import { any } from '@amcharts/amcharts5/.internal/core/util/Array';
import { Observable } from 'rxjs';
import { countryData } from '../../core/models/olympics';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  
  service = Inject(OlympicsService)
  private root!: am5.Root;
  countriesNames: string[] = []
  totalMedalsList: number[] = []
  countryTotalMedals:number = 0

  constructor() { }

  ngOnInit(): void {

    [this.countriesNames, this.countryTotalMedals] = this.service.countriesAndTotalMedalsList()
    this.Cheese(this.countriesNames, this.totalMedalsList)

  }

  Cheese(countriesNames: any, totalMedalsList: any){
    const root = am5.Root.new("pie");
    const chart = root.container.children.push(
      am5percent.PieChart.new(
        root, {}
      )
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        categoryField: "country",
        valueField: "medals"
      }));

    let data = countriesNames.map((countryName: any, index: any) => ({
      country: countryName,
      medals: totalMedalsList[index]
    }));

    series.data.setAll(data)
  }
}