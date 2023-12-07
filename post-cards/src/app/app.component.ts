import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Stupid Tree',
      image: 'assets/tree.jpeg',
      content: 'Whatever text you have in mind asshole number 1.',
      username: 'whatever',
    },
    {
      title: 'Stupid Biker',
      image: 'assets/biking.jpeg',
      content: 'Whatever text you have in mind asshole number 2.',
      username: 'whatever2',
    },
    {
      title: 'Stupid Mountain',
      image: 'assets/mountain.jpeg',
      content: 'Whatever text you have in mind asshole number 3.',
      username: 'whatever3',
    },

  ];
}
