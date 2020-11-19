import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launching-page',
  templateUrl: './launching-page.component.html',
  styleUrls: ['./launching-page.component.css'],
})
export class LaunchingPageComponent implements OnInit {
  respons;
  errorMessage;
  array: string[] = ['seoul', 'aluva', 'delhi', 'chennai', 'norway', 'busan', 'london', 'paris']
  copyItems = [];
  constructor(
    private service: DataService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.array.forEach(item => {
      this.service.getCityCard(item).subscribe((res) => {
        this.copyItems.push(res)

      })
    })
  }
  getCity(city) {
    this.errorMessage = '';
    this.service.getDatacity(city).subscribe(
      (cityname) => {
        this.respons = cityname;
        this.router.navigate(['/location'], {
          queryParams: { cityname: this.respons.name },
        });
      },
      (error) => {
        console.error('error caught in component');
        this.errorMessage = error;
        throw error;
      }
    );
  }
}
