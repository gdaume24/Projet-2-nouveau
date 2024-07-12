import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { countryData } from '../models/olympics';

@Injectable({
  providedIn: 'root'
})
export class OlympicsService {

  private olympicUrl = './assets/mock/olympic.json';

  constructor(private http: HttpClient) {
  }

  loadInitialData(): Observable<countryData[]>{
    return this.http.get<countryData[]>(this.olympicUrl);
  }

  observerCountriesAndTotalMedalsList = {
    let totalMedalsList: number[] = []
    let countriesNames: string[] = []
    next: (datas: countryData[]) => {
      if(datas != null){
        for(let i=0; i<datas.length; i++){
          countriesNames.push(datas[i].country)
        
          let countryTotalMedals = 0 
          for(let j=0; j<datas[i].participations.length; j++){
            countryTotalMedals += datas[i].participations[j].medalsCount
          }
          totalMedalsList.push(countryTotalMedals)
        }
      }
    }
  return [countriesNames, totalMedalsList]
  }

  countriesAndTotalMedalsList(): [string[], number[]] {
    let totalMedalsList: number[] = []
    let countriesNames: string[] = []
    next: (datas: countryData[]) => {
      if(datas != null){
        for(let i=0; i<datas.length; i++){
          countriesNames.push(datas[i].country)
        
          let countryTotalMedals = 0 
          for(let j=0; j<datas[i].participations.length; j++){
            countryTotalMedals += datas[i].participations[j].medalsCount
          }
          totalMedalsList.push(countryTotalMedals)
        }
      }
    }
  return [countriesNames, totalMedalsList]}
}