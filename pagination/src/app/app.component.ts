import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: Array<{[key: string]: string}> = [
    {title: "Bike", link: "assets/biking.jpeg"},
    {title: "Mountains", link: "assets/mountain.jpeg"},
    {title: "Tree", link: "assets/tree.jpeg"},

    {title: "Bike", link: "assets/biking.jpeg"},
    {title: "Mountains", link: "assets/mountain.jpeg"},
    {title: "Tree", link: "assets/tree.jpeg"},

    {title: "Bike", link: "assets/biking.jpeg"},
    {title: "Mountains", link: "assets/mountain.jpeg"},
    {title: "Tree", link: "assets/tree.jpeg"},
  ]
  currentPage: number = 0;

  border: string = '3px solid black'; // test field for testing appStyle directive;
  getClass(i: number) {
    const classes = [];

    if(i == this.currentPage)
      classes.push("active");
    else if(i == 0)
      classes.push("bg-danger");
    else if(i == this.pages.length - 1)
      classes.push("bg-warning");

    return classes;
  }

  indexIsNearCurrent(index: number) {
    return Math.abs(this.currentPage - index) < 3;
  }
}
