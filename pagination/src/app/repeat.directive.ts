import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
})

// STRUCTURAL DIRECTIVE
export class RepeatDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appRepeat') set repeat(times: number) {
    for (let i = 0; i < times; i++)
      this.viewContainerRef.createEmbeddedView(
        this.templateRef,
        // context:
        {
          idx: i,
          pageIdx: i + 1, // just for testing multiple contexts
        }
      );
  }
}
