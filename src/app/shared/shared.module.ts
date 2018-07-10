import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ColorizedNoteDirective } from './directives/colorized-note/colorized-note.directive';
import { AdultPipePipe } from './pipes/adult-pipe/adult-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
  ],
  declarations: [
    ColorizedNoteDirective,
    AdultPipePipe,
  ],
  exports: [
    ColorizedNoteDirective,
    AdultPipePipe,
  ],
})
export class SharedModule { }
