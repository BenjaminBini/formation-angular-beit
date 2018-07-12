import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MoviesComponent } from './movies.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieService } from './movie.service';
import { CardComponent } from './card/card.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieEditReactiveComponent } from './movie-edit-reactive/movie-edit-reactive.component';

const routes: Routes = [
  { path: ':id', component: CardComponent},
  { path: '', component: MoviesComponent}
]

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpModule,
  ],
  exports: [
    MoviesComponent,
  ],
  declarations: [
    MoviesComponent,
    CardComponent,
    MovieEditComponent,
    MovieEditReactiveComponent,
  ],
  providers: [
    MovieService,
  ],
  entryComponents: [
    MovieEditComponent,
    MovieEditReactiveComponent,
  ]
})
export class MoviesModule { }
