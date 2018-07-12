import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movie: any;
  
  idFromFroute:number = -1;

  constructor(private route: ActivatedRoute, private movieService : MovieService) {
    this.route.params.subscribe(params => {
        this.idFromFroute = params.id;
    });
  }

  ngOnInit() {
    if (this.idFromFroute) {
      this.movieService.getById(this.idFromFroute).subscribe((res) => this.movie = res);;
    }
  }

}
