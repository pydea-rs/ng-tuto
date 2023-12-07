import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}
  getHomeClass() {
    console.log(this.router)
    return this.router.url === '/' ? 'active item' : 'item';
  }
}
