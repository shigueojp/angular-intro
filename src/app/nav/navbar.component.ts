import { Component } from "@angular/core";
import { AuthService } from '../user/auth.service';
import { ISession } from '../events/shared/events.model';
import { EventsService } from '../events/shared/events.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
            li > a.active { color: #aaa}
        `]
})

export class NavBarComponent {
    constructor(public authService: AuthService, private eventService: EventsService) {
    }

    searchTerm: string = "";
    foundSessions: ISession[];

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
            this.foundSessions = sessions
            console.log(this.foundSessions)
        })
    }
}