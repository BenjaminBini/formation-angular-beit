import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[colorizedNote]'
})
export class ColorizedNoteDirective implements OnChanges {

  @Input('colorizedNote') note: number;
  
  constructor(private el: ElementRef) { 
  }


  ngOnChanges() {
    let color = 'red';
    if (this.note > 8) {
      color = 'green';
    } else if (this.note > 5) {
      color = 'orange';
    }
    this.el.nativeElement.style.color = color;
  }


}
