import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{
  title = 'weather';

  splash = true;

  constructor(private router: Router) { }

  ngAfterViewInit() {

    setTimeout(() => {
        this.splash = false;
    }, 3400);  
  }
}
