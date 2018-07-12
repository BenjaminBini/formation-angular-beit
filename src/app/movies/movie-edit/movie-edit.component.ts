import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  movie: any;
  comment = {
    title: "",
    text: "",
    date: "",
    note: "",
  };

  constructor(public dialogRef: MatDialogRef<MovieEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.movie = data;
  }

  ngOnInit() {
  }

}
