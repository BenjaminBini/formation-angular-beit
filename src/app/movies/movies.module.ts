import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MoviesComponent } from './movies.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
  ],
  exports: [
    MoviesComponent,
  ],
  declarations: [
    MoviesComponent,
  ]
})
export class MoviesModule { }
