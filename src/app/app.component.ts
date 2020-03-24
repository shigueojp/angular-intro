import { Component } from '@angular/core';
import { } from '@angular/router'

@Component({
  selector: 'app-root',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'ng-intro';
}
