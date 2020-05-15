import { Component } from '@angular/core';
import { } from '@angular/router'
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'ng-intro';

  constructor(private auth: AuthService) { }
  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
