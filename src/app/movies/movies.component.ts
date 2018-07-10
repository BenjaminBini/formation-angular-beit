import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

const ELEMENT_DATA: any[] = [];

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  displayedColumns: string[] = ['title', 'popularity', 'adult', 'overview', 'release_date', 'vote_average', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(private moviesService: MovieService) {
    moviesService.getAll().subscribe((res) => this.dataSource = res);
  }

  ngOnInit() {
  }

}
