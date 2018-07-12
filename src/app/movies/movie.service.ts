import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class MovieService {
  baseUrl: String = 'http://demo.capcod.eu/movies/api';

  constructor(private http: Http) { }

  public getAll(): Observable<any[]> {
    return this.http.get(`${this.baseUrl}/movie`)
      .pipe(
        map((data) => {
          return data.json();
        }, (err) => {
          console.log('An error occured', err);
        }
      )
    );
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}`)
      .pipe(
        map((data) => {
          return data.json();
        }, (err) => {
          console.log('An error occured', err);
        }
      )
    );
  }

}
