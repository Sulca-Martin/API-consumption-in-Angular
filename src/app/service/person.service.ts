import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiURL = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  getPerson(results: number): Observable<any> {
    return this.http.get(`${this.apiURL}?results=${results}`); //requests a number of people for results
  }
}
