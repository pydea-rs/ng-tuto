import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
  @Input() title: string = '';
  @Input() username: string = '';
  @Input() content: string = '';
  @Input() image: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
