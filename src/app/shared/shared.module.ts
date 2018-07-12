import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { ColorizedNoteDirective } from './directives/colorized-note/colorized-note.directive';
import { SoftLanguageDirective } from './directives/soft-language/soft-language.directive';
import { AdultPipePipe } from './pipes/adult-pipe/adult-pipe.pipe';
import { ViewDateValidatorDirective } from './directives/view-date-validator/view-date-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
  ],
  declarations: [
    ColorizedNoteDirective,
    SoftLanguageDirective,
    ViewDateValidatorDirective,
    AdultPipePipe,
  ],
  exports: [
    ColorizedNoteDirective,
    SoftLanguageDirective,
    ViewDateValidatorDirective,
    AdultPipePipe,
  ],
})
export class SharedModule { }
