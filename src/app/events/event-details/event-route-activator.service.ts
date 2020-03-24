import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventsService } from '../shared/events.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {
    constructor(private eventService:EventsService, private router:Router){}

    canActivate(route:ActivatedRouteSnapshot){
        const isEvent = !!this.eventService.getEvent(+route.params['id']);
        
        if (!isEvent) {
            this.router.navigate(['/404'])
        }

        return isEvent
    }
}
