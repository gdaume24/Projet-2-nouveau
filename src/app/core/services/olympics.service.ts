import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OlympicsService {

  private olympicUrl = './assets/mock/olympic.json';

  constructor(private http: HttpClient) { }

  loadInitialData() {
    return this.http.get(this.olympicUrl);
  }

  countriesAndTotalMedalsList(): Observable<[string[], number[]]> {
    
    let totalMedalsList: number[] = []
    let countriesNames: string[] = []

    return this.loadInitialData().subscribe(result => {
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
    })
    return [countriesNames, totalMedalsList]
  }
}