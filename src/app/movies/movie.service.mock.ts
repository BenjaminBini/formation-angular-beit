import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";


@Injectable()
export class MovieMockService {


  movies = [{
    id: 1,
    vote_count: 1,
    video: false,
    vote_average: 2,
    title: "Test",
    popularity:164,
    poster_path:"/x1txcDXkcM65gl7w20PwYSxAYah.jpg",
    original_language:"en",
    original_title:"Test",
    genre_ids:null,
    backdrop_path:"/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg",
    adult:false,
    overview:"Test overview","release_date":"2018-06-14",
    comments:null,
  }];

  public getAll(): Observable<any> {
    return of(this.movies);
  }

  public getById(id: number): Observable<any> {
    return of(this.movies[0]);
  }

}
