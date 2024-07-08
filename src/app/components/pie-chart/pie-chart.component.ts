import { Component, Inject } from '@angular/core';
import { OlympicsService } from '../../core/services/olympics.service';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import { countryData, participation } from '../../core/models/olympics';

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
    let dataLists = this.service.countriesAndTotalMedalsList()
    this.countriesNames = dataLists[0]
    this.totalMedalsList = dataLists[1]
    this.Cheese(this.countriesNames, this.totalMedalsList)
    console.log("Hello")
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