import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { MatDialog } from '@angular/material';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieEditReactiveComponent } from './movie-edit-reactive/movie-edit-reactive.component';

const ELEMENT_DATA: any[] = [];

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  displayedColumns: string[] = ['title', 'popularity', 'adult', 'overview', 'release_date', 'vote_average', 'action'];
  dataSource = ELEMENT_DATA;
  mode = 'list';

  constructor(private moviesService: MovieService, public dialog: MatDialog) {
    moviesService.getAll().subscribe((res) => this.dataSource = res);
  }

  ngOnInit() {
  }

  openEditDialog(movie) {
    const dialogRef = this.dialog.open(MovieEditComponent, {
      width: '800px',
      data: movie
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openEditReactiveDialog(movie) {
    const dialogRef = this.dialog.open(MovieEditReactiveComponent, {
      width: '800px',
      data: movie
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
