import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { countryData } from '../models/olympics';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<countryData[]>([]);

  constructor(private http: HttpClient) {}

  loadData() {
    this.http.get<countryData[]>(this.olympicUrl).subscribe(
      (data) => {
        this.olympics$.next(data);
      },
      (error) => {
        console.error('Erreur lors du chargement des données:', error);
      }
    );
  }

  getData() {
    return this.olympics$.asObservable();
  }
}
