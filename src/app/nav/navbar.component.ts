import { Component } from "@angular/core";
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
            li > a.active { color: #aaa}
        `]
})

export class NavBarComponent {
    constructor(public authService: AuthService) {

    }
}