import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movie: any;

  constructor() { }

  ngOnInit() {

  }

}
