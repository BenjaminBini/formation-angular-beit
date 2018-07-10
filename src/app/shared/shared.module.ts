import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ColorizedNoteDirective } from './directives/colorized-note/colorized-note.directive';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
  ],
  declarations: [
    ColorizedNoteDirective,
  ],
  exports: [
    ColorizedNoteDirective,
  ],
})
export class SharedModule { }
