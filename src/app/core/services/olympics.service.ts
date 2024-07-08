import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { countryData, participation } from '../../core/models/olympics';
import { load } from '@amcharts/amcharts5/.internal/core/util/Net';

@Injectable({
  providedIn: 'root'
})
export class OlympicsService {

  private olympicUrl = './assets/mock/olympic.json';

  constructor(private http: HttpClient) { }

  loadInitialData(): Observable<countryData[]> {
    return this.http.get<countryData[]>(this.olympicUrl);
  }
  initialData$ = this.loadInitialData()

  countriesAndTotalMedalsList(): Observable<[string[], number[]]> {
    
    let totalMedalsList: number[] = []
    let countriesNames: string[] = []

      let initialData: any = result
      if(initialData != null){
        for(let i=0; i<initialData.length; i++){
          countriesNames.push(initialData[i].country)
        
          let countryTotalMedals = 0 
          for(let j=0; j<initialData[i].participations.length; j++){
            countryTotalMedals += initialData[i].participations[j].medalsCount
          }
          totalMedalsList.push(countryTotalMedals)
        }
      }
    return [countriesNames, totalMedalsList]
  }