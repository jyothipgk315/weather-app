import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'c7fdda92a0ce8bc7b59fc3584267fd81';

  constructor(private http: HttpClient) { }

  getDatacity(city: string) {
    let params = new HttpParams().set('q', city).set('appid', this.apiKey);
    return this.http.get(this.url, { params });
  }
  getCityCard(city) {
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c7fdda92a0ce8bc7b59fc3584267fd81'
    );
  }
}
