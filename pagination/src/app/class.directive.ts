import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) { }

    // test this?
    @Input('appClass') set conditionalClass(value: any) {
      const {nativeElement} = this.element;
      for(const k in value) {
        if(value[k])
          nativeElement.classList.add(k);
        else
          nativeElement.classList.remove(k);
      }
    }
}
