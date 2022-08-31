import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { API_KEY, API_URL } from '../api.config';

interface SearchResults {
  country: string,
  region: string,
  name: string,
  url: string
}

interface Weather {
  current: {
    condition: {
      text: string,
      icon: string
    },
    feelslike_c: number,
    temp_c: number,
  }
  location: {
    name: string
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search = "";

  results: SearchResults[] = [];

  weather: Weather | null = null;

  searchURL = `${API_URL}/search.json?key=${API_KEY}`;

  weatherURL = `${API_URL}/forecast.json?key=${API_KEY}`;

  ipURL = `${API_URL}/forecast.json?key=${API_KEY}&q=auto:ip`;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.ipURL).subscribe((res) => {

      if(!res) return;

      this.weather = res as Weather;

      console.log(res);
    })
  }

  searchCall() {

    if(!this.search || this.search === "") return;

    this.http.get(`${this.searchURL}&q=${this.search}`).subscribe((res) => {

      if(!res) return;

      this.results = res as SearchResults[];
    })
  }

  showWeather(url: string) {

    if(!url || url === "") return;

    this.http.get(`${this.weatherURL}&q=${url}`).subscribe((res) => {

      if(!res) return;

      this.weather = res as Weather;

      console.log(res);
    })
  }

}
