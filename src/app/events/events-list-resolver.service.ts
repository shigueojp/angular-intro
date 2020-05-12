import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { EventsService } from './shared/events.service';
import { map } from 'rxjs/operators'

@Injectable()
export class EventListResolverService implements Resolve<any>{
    constructor(private eventService: EventsService) {
    }

    resolve() {
        return this.eventService.getEvents()
    }
}