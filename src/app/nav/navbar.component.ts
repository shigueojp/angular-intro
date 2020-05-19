import { Component } from "@angular/core";
import { AuthService } from '../user/auth.service';
import { ISession, IEvent } from '../events/shared/events.model';
import { EventsService } from '../events/shared/events.service';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
            li > a.active { color: #aaa}
        `]
})

export class NavBarComponent {
    events: IEvent[];
    constructor(public authService: AuthService, private eventService: EventsService) {
    }

    ngOnInit() {
        this.eventService.getEvents().subscribe(data => {
            this.events = <IEvent[]>data
        })
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