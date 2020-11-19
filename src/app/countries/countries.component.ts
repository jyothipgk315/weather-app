import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  DataRespons;
  locationdata;
  respons;
  constructor(
    private service: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.respons = {
      main: {},
      sys: {},
      coord: {},
      wind: {},
      weather: [{}],
    };
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((place) => {
      this.service.getDatacity(place.cityname).subscribe((city) => {
        this.respons = city;
        this.respons.temperature = (this.respons.main.temp - 273.15).toFixed(0);
        this.respons.temperature_min = (
          this.respons.main.temp_min - 273.15
        ).toFixed(0);
        this.respons.temperature_max = (
          this.respons.main.temp_max - 273.15
        ).toFixed(0);
      });
    });
  }
  gotoHome() {
    this.router.navigate(['/']);
  }
}
