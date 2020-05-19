import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventsService } from './shared/events.service';
import { map } from 'rxjs/operators'

@Injectable()
export class EventResolver implements Resolve<any>{
    constructor(private eventService: EventsService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEvent(route.params['id'])
    }
}