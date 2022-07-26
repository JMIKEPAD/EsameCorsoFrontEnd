import { Component, OnInit } from '@angular/core';
import { Beer } from './models/beer';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'displayApi';

  beers: Beer[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(): void {
    this.api.getAllBeers().subscribe({
      next: (beers) => (this.beers = beers),
      error: (err) => console.log(err),
    });
  }

}
