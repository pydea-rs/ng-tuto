import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private element: ElementRef) {}

  // first type of using appStyle directive:
  // @Input() set color(value: string) {
  //   const {nativeElement: el} = this.element;
  //   el.style.color = value;
  // }

  //short way of doing it:
  @Input('appStyle') set inlineStyle(value: { [key: string]: any }) {
    const { nativeElement: el } = this.element;

    // for(const k of Object.keys(value)) {
    for (const k in value) {
      el.style[k] = value[k];
    }
  }

}
