import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MoviesComponent } from './movies.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieService } from './movie.service';

const routes: Routes = [
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
  ],
  providers: [
    MovieService
  ]
})
export class MoviesModule { }
