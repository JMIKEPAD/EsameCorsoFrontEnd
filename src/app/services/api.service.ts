import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../models/beer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_URL = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) { }

  getAllBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.API_URL)
  }

}
