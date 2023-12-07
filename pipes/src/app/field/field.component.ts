import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() secondValue: string = '';
  @Input() inputFunction: (event: Event) => void = (event: Event) => {};
  @Input() newLabel: string = "";
  @Input() inputType: string = "text";
  @Input() unit: string = '';
  @Input() object: {[key: string] : any} = {}; // compact version

  constructor() { }

  ngOnInit(): void {
  }

}
